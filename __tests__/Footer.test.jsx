// __tests__/Footer.test.jsx

// Testing utilities from React Testing Library
import { render, screen } from "@testing-library/react";
// Component under test
import Footer from "@/components/Footer";
// Static data used by Footer
import { socialMedia } from "@/data";

// Group all Footer-related tests
describe("Footer", () => {
  // Render the Footer before each test for isolation and repeatability
  beforeEach(() => {
    render(<Footer />);
  });

  // ---------------------------------------------
  // Test: Main heading renders correctly
  // Use getByRole with level and name instead of getByText
  // This handles nested elements (like <span>) in the heading
  // ---------------------------------------------
  it("renders the main heading", () => {
    const heading = screen.getByRole("heading", {
      level: 1,
      name: /Let's build efficient and impactful web applications together/i,
    });
    expect(heading).toBeInTheDocument();
  });

  // ---------------------------------------------
  // Test: Description paragraph renders
  // Regex escapes special characters like periods and parentheses
  // ---------------------------------------------
  it("renders the description paragraph", () => {
    expect(
      screen.getByText(
        /I specialize in full-stack development using React, Next\.js, Java \(Spring Boot\), and Node\.js/i
      )
    ).toBeInTheDocument();
  });

  // ---------------------------------------------
  // Test: CTA button renders with correct text
  // Simple test to ensure the call-to-action is visible
  // ---------------------------------------------
  it("renders the CTA button with correct title", () => {
    expect(screen.getByText(/Get in Touch/i)).toBeInTheDocument();
  });

  // ---------------------------------------------
  // Test: Social media links render
  // Filter out the mailto link to only check social links
  // Verify correct number and href attributes for each
  // ---------------------------------------------
  it("renders all social media links", () => {
    const links = screen
      .getAllByRole("link")
      .filter(link => !link.href.startsWith("mailto:")); // Exclude CTA

    // Ensure all social media links are present
    expect(links).toHaveLength(socialMedia.length);

    // Check each link URL matches data
    links.forEach((link, index) => {
      expect(link).toHaveAttribute("href", socialMedia[index].url);
    });
  });

  // ---------------------------------------------
  // Test: Copyright text renders
  // Simple visibility test
  // ---------------------------------------------
  it("renders copyright text", () => {
    expect(screen.getByText(/Copyright © 2025/i)).toBeInTheDocument();
  });
});
