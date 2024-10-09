import { Features } from "@/components/Features";
import { FEATURES } from "@/constants";
import { render, screen } from "@testing-library/react";

describe("Features Component", () => {
  beforeEach(() => {
    render(<Features />);
  });

  test("should render phone image correctly", () => {
    const altPhone = screen.getByAltText("phone");
    expect(altPhone).toBeInTheDocument();
    expect(altPhone).toHaveAttribute(
      "src",
      expect.stringContaining("phone.png")
    );
    expect(altPhone).toHaveClass("feature-phone");
  });

  test("should render camp image correctly", () => {
    const campImage = screen.getByRole("img", { name: "camp" });
    expect(campImage).toBeInTheDocument();
    expect(campImage).toHaveAttribute(
      "src",
      expect.stringContaining("camp.svg")
    );
  });

  test("should render the text 'Our Features' correctly in a h2 element", () => {
    const textContent = screen.getByRole("heading", { name: /our features/i });
    expect(textContent).toBeInTheDocument();
    expect(textContent).toHaveTextContent("Our Features");
  });

  test("should render all features", () => {
    const listItem = screen.getAllByRole("listitem");
    expect(listItem.length).toBe(FEATURES.length);
    FEATURES.forEach((item) => {
      const textTile = screen.getByText(item.title);
      const textDescription = screen.getByText(item.description);
      expect(textTile).toBeInTheDocument();
      expect(textDescription).toBeInTheDocument();
    });
  });
});
