import { render, screen } from "@testing-library/react";
import { NavBar } from "@/components/NavBar";
import { NAV_LINKS } from "@/constants";
import { beforeEach } from "node:test";

describe("NavBar Component", () => {

  test("should find the image by its alt text", () => {
    render(<NavBar />)
    const logoAlt = screen.getByAltText("logo");
    expect(logoAlt).toBeInTheDocument();
  });

  test("should render all navigation links", () => {
    render(<NavBar />)
    NAV_LINKS.forEach((link) => {
      const navLink = screen.getByText(link.label);
      expect(navLink).toBeInTheDocument();
    });
  });

  test("should render the Login button", () => {
    render(<NavBar />)
    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).toBeInTheDocument();
  });

  test("should render the logo image", () => {
    render(<NavBar />)
    const menuIcon = screen.getByAltText(/menu/i);
    expect(menuIcon).toBeInTheDocument();
  });
});
