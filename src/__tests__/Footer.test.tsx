// __tests__/Footer.test.tsx
import { render, screen } from "@testing-library/react";
import { FOOTER_LINKS, FOOTER_CONTACT_INFO, SOCIALS } from "@/constants";
import { Footer } from "@/components/Footer";

describe("Footer Component", () => {
  beforeEach(() => {
    render(<Footer />);
  });
  test("should render the footer logo", () => {
    const logo = screen.getByAltText(/logo footer/i);
    expect(logo).toBeInTheDocument();
  });

  test("should render all footer links", () => {
    FOOTER_LINKS.forEach((column) => {
      // Check the column title
      const columnTitle = screen.getByText(column.title);
      expect(columnTitle).toBeInTheDocument();

      // Check each link in the column
      column.links.forEach((link) => {
        const footerLink = screen.getAllByText(link);
        expect(footerLink.length).toBeGreaterThanOrEqual(1);
      });
    });
  });

  test("should render the contact information", () => {
    const contactTitle = screen.getAllByText(FOOTER_CONTACT_INFO.title);
    expect(contactTitle.length).toBeGreaterThan(0);

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

    // Check that each social icon is rendered and has the correct src
    SOCIALS.links.forEach((link) => {
      const socialIcon = screen.getByAltText(`logo ${link}`);
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
