// __tests__/Experience.test.jsx
import { render, screen } from "@testing-library/react";
import Experience from "../components/Experiences";
import { experiences } from "@/data";

// Mock Card to avoid animations/border complexity in tests
jest.mock("../components/ui/MovingBorder", () => ({
  Card: ({ children }) => <div>{children}</div>,
}));

describe("Experience Component", () => {
  beforeEach(() => {
    render(<Experience />);
  });

  // ✅ Ensure section heading is present
  it("renders the section title", () => {
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /my work experience/i,
    });
    expect(heading).toBeInTheDocument();
  });

  // ✅ Ensure all experiences from data appear
  it("renders all experience cards", () => {
    experiences.forEach((exp) => {
      expect(screen.getByText(exp.title)).toBeInTheDocument();
      expect(screen.getByText(exp.desc)).toBeInTheDocument();
    });
  });

  // ✅ Ensure each card has a thumbnail with correct alt and src
  it("renders thumbnails for each experience", () => {
    experiences.forEach((exp) => {
      const img = screen.getByAltText(exp.title);
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("src", exp.thumbnail);
    });
  });
});
