import { NavBar } from "@/components/NavBar";
import { NAV_LINKS } from "@/constants";
import { render, screen } from "@testing-library/react";

describe("NavBar Component at 1024px (desktop view)", () => {
  beforeEach(() => {
    render(<NavBar />);
  });

  test("should find the image by its alt text", () => {
    const logoAlt = screen.getByAltText("logo");
    expect(logoAlt).toBeInTheDocument();
  });

  test("should render all navigation links", () => {
    NAV_LINKS.forEach((link) => {
      const navLink = screen.getByText(link.label);
      expect(navLink).toBeInTheDocument();
    });
  });

  test("should render the Login button", () => {
    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).toBeInTheDocument();
  });

  test("should render the logo image", () => {
    const menuIcon = screen.getByAltText(/menu/i);
    expect(menuIcon).toBeInTheDocument();
  });

  test("should render the correct number of navigation links", () => {
    const navLinks = screen.getAllByRole("link");
    console.log(navLinks.length);
    expect(navLinks.length).toBe(6);
  });
});
