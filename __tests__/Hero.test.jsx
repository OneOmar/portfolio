import { render, screen } from "@testing-library/react";
import Hero from "../components/Hero";

describe("Hero", () => {
  it("renders the role description", () => {
    render(<Hero />);
    expect(
      screen.getByText(/Full-Stack Developer \| React & Next\.js \| Java & Spring Boot/i)
    ).toBeInTheDocument();
  });

  it("renders the short intro text", () => {
    render(<Hero />);
    expect(screen.getByTestId("hero-intro")).toHaveTextContent(
      "Hi! I'm Omar, a Full-Stack Developer based in Morocco"
    );
  });

  it("renders the CTA button linking to projects section", () => {
    render(<Hero />);
    const link = screen.getByRole("link", { name: /Show my work/i });
    expect(link).toHaveAttribute("href", "#projects");
  });
});
