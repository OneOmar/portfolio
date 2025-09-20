// __tests__/Approach.test.jsx

import { render, screen, fireEvent } from "@testing-library/react";
import Approach from "../components/Approach";
import { phases } from "@/data";

// Mock CanvasRevealEffect to avoid testing complex canvas logic in this unit test
jest.mock("../components/ui/CanvasRevealEffect", () => ({
  CanvasRevealEffect: () => <div data-testid="mock-canvas" />,
}));

describe("Approach Component", () => {
  // Render the component before each test
  beforeEach(() => {
    render(<Approach />);
  });

  // ---------------------------------------------
  // Test: Section title is rendered correctly
  // Uses getByRole with accessible name
  // ---------------------------------------------
  it("renders the section title", () => {
    const title = screen.getByRole("heading", {
      level: 1,
      name: /my approach/i,
    });
    expect(title).toBeInTheDocument();
  });

  // ---------------------------------------------
  // Test: All phases render as interactive cards
  // Uses aria-label Phase {order}: {title}
  // ---------------------------------------------
  it("renders all phases as interactive cards", () => {
    phases.forEach(({ order, title }) => {
      const card = screen.getByRole("button", {
        name: new RegExp(`Phase ${order}: ${title}`, "i"),
      });
      expect(card).toBeInTheDocument();
      expect(card).toHaveAttribute("aria-expanded", "false");
    });
  });

  // ---------------------------------------------
  // Test: Clicking a card toggles expanded state
  // aria-expanded should switch true/false
  // ---------------------------------------------
  it("expands a card on click and collapses it when clicked again", () => {
    const { order, title } = phases[0];
    const card = screen.getByRole("button", {
      name: new RegExp(`Phase ${order}: ${title}`, "i"),
    });

    // Initially collapsed
    expect(card).toHaveAttribute("aria-expanded", "false");

    // Click -> expand
    fireEvent.click(card);
    expect(card).toHaveAttribute("aria-expanded", "true");

    // Click again -> collapse
    fireEvent.click(card);
    expect(card).toHaveAttribute("aria-expanded", "false");
  });

  // ---------------------------------------------
  // Test: Canvas effect only appears for active card
  // ---------------------------------------------
  it("renders canvas effect only when a card is active", () => {
    const { order, title } = phases[0];
    const card = screen.getByRole("button", {
      name: new RegExp(`Phase ${order}: ${title}`, "i"),
    });

    // No canvas before interaction
    expect(screen.queryByTestId("mock-canvas")).toBeNull();

    // Click -> canvas appears
    fireEvent.click(card);
    expect(screen.getByTestId("mock-canvas")).toBeInTheDocument();
  });
});
