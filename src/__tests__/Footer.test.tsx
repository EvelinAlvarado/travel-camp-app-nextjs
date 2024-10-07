// __tests__/Footer.test.tsx
import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/Footer";
import { FOOTER_LINKS, FOOTER_CONTACT_INFO, SOCIALS } from "@/constants";

describe("Footer Component", () => {
  test("should render the footer logo", () => {
    render(<Footer />);
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });

  test("should render all footer links", () => {
    render(<Footer />);
    FOOTER_LINKS.forEach((column) => {
      // Check the column title
      const columnTitle = screen.getByText(column.title);
      expect(columnTitle).toBeInTheDocument();

      // Check each link in the column
      column.links.forEach((link) => {
        const footerLink = screen.getByText(link);
        expect(footerLink).toBeInTheDocument();
      });
    });
  });

  test("should render the contact information", () => {
    render(<Footer />);
    const contactTitle = screen.getByText(FOOTER_CONTACT_INFO.title);
    expect(contactTitle).toBeInTheDocument();

    FOOTER_CONTACT_INFO.links.forEach((link) => {
      const contactLabel = screen.getByText(`${link.label}:`);
      const contactValue = screen.getByText(link.value);
      expect(contactLabel).toBeInTheDocument();
      expect(contactValue).toBeInTheDocument();
    });
  });

  test("should render all social media icons", () => {
    const socialTitle = screen.getByText(SOCIALS.title);
    expect(socialTitle).toBeInTheDocument();

    // Check that each social icon is rendered
    SOCIALS.links.forEach((link) => {
      const socialIcon = screen.getByAltText("logo"); // Assuming "logo" is the alt text for all social icons
      expect(socialIcon).toHaveAttribute("src", link); // Verifies that the image src is correct
    });
  });

  test("should render the copyright message", () => {
    const copyrightText = screen.getByText(
      /2024 Hilink \| All rights reserved/i
    );
    expect(copyrightText).toBeInTheDocument();
  });
});
