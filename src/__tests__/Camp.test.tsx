import { Camp } from "@/components/Camp";
import { PEOPLE_URL } from "@/constants";
import { render, screen } from "@testing-library/react";

describe("Camp Component", () => {
  beforeEach(() => {
    render(<Camp />);
  });
  test("should render text content", () => {
    const textContent = screen.getByText(
      "Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That`&apos`s why we are here for those of you who want to start an adventure"
    );
    expect(textContent).toBeInTheDocument();
  });

  test("should render a image with its attribute", () => {
    const altImage = screen.getByAltText("camp-2");
    expect(altImage).toBeInTheDocument();
    expect(altImage).toHaveClass("camp-quote");
    expect(altImage).toHaveAttribute(
      "src",
      expect.stringContaining("quote.svg")
    );
  });

  test("should render Campsite components correctly", () => {
    const campTitles = ["Putuk Truno Camp", "Mountain View Camp"];
    const h4Elements = screen.getAllByRole("heading", { level: 4 });
    expect(h4Elements).toHaveLength(campTitles.length);
    campTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  test("should render the correct number of people images", () => {
    const peopleImages = screen.getAllByRole("img", { name: "person" });
    expect(peopleImages).toHaveLength(PEOPLE_URL.length * 2);
  });
});
