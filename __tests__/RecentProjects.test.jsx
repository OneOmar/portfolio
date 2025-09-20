// __tests__/RecentProjects.test.jsx

import { render, screen } from "@testing-library/react";
import RecentProjects from "../components/RecentProjects";
import { projects } from "@/data";

// Mock PinContainer to avoid testing complex 3D logic in this unit test
jest.mock("../components/ui/3d-pin", () => ({
  PinContainer: ({ children }) => <div>{children}</div>,
}));

describe("RecentProjects Component", () => {
  // Render the component before each test
  beforeEach(() => {
    render(<RecentProjects />);
  });

  // ---------------------------------------------
  // Test: Section title is rendered correctly
  // Uses getByRole with accessible name to handle nested spans
  // ---------------------------------------------
  it("renders the section title", () => {
    const title = screen.getByRole("heading", {
      level: 1,
      name: /A small selection of recent projects/i
    });
    expect(title).toBeInTheDocument();
  });

  // ---------------------------------------------
  // Test: All project cards display title, description, and GitHub link
  // Iterates over mock projects data
  // ---------------------------------------------
  it("renders all project cards", () => {
    projects.forEach((project) => {
      // Check title and description text
      expect(screen.getByText(project.title)).toBeInTheDocument();
      expect(screen.getByText(project.description)).toBeInTheDocument();

      // Check presence of GitHub link indicator
      expect(screen.getAllByText(/Check GitHub/i).length).toBeGreaterThan(0);
    });
  });

  // ---------------------------------------------
  // Test: Each project card shows its image
  // ---------------------------------------------
  it("renders images for each project card", () => {
    projects.forEach((project) => {
      const img = screen.getByAltText(`Screenshot of ${project.title}`);
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute("src", project.img);
    });
  });

  // ---------------------------------------------
  // Test: Each card renders the background pattern image
  // ---------------------------------------------
  it("renders background pattern image in each card", () => {
    const bgImages = screen.getAllByAltText("Background pattern");
    expect(bgImages.length).toBe(projects.length);
  });
});
