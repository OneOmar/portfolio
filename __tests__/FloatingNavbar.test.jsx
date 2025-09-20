// __tests__/FloatingNav.test.jsx
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { FloatingNav } from "../components/FloatingNavbar";
import { navItems } from "@/data";

describe("FloatingNav", () => {
  beforeEach(() => {
    // Render the component with the navItems
    render(<FloatingNav navItems={navItems} />);
  });

  // ---------------------------------------------
  // Test: All nav items render
  // Ensures that each nav item name appears
  // ---------------------------------------------
  it("renders all navigation items", () => {
    navItems.forEach(item => {
      const navElement = screen.getByText(item.name);
      expect(navElement).toBeInTheDocument();
    });
  });

  // ---------------------------------------------
  // Test: Nav item links have correct href
  // ---------------------------------------------
  it("has correct href for each nav item", () => {
    navItems.forEach(item => {
      const link = screen.getByText(item.name).closest("a");
      expect(link).toHaveAttribute("href", item.link);
    });
  });

  // ---------------------------------------------
  // Test: Clicking nav item triggers smooth scroll
  // Mock scrollIntoView since jsdom doesn’t implement it
  // ---------------------------------------------
  it("calls scrollIntoView on nav item click", () => {
    // Mock scrollIntoView
    const scrollIntoViewMock = jest.fn();
    document.querySelector = jest.fn().mockReturnValue({ scrollIntoView: scrollIntoViewMock });

    const link = screen.getByText(navItems[0].name).closest("a");
    fireEvent.click(link);

    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth", block: "start" });
  });

  // ---------------------------------------------
  // Test: Component is visible initially
  // ---------------------------------------------
  it("is initially visible", async () => {
    const nav = await screen.findByRole("navigation");
    await waitFor(() => {
      expect(nav).toBeVisible();
    });
  });
});
