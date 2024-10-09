import { Hero } from "@/components/Hero";
import { render, screen } from "@testing-library/react";

describe("Hero Component", () => {
  beforeEach(() => {
    render(<Hero />);
  });
  test("should render main heading with correct text", () => {
    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Putuk Truno Camp Area");
  });

  test("should render the paragraph with correct text", () => {
    const paragraph = screen.getByText(
      /We want to be on each of your journeys/i
    );
    expect(paragraph).toBeInTheDocument();
  });

  test("should render star images", () => {
    const stars = screen.getAllByAltText("star");
    expect(stars).toHaveLength(5);
  });

  test("should render review text with count", () => {
    const reviewText = screen.getByText(/198k/);
    expect(reviewText).toBeInTheDocument();
    expect(reviewText).toHaveTextContent("198k");
    expect(screen.getByText(/Excellent Reviews/i)).toBeInTheDocument();
  });

  test("should render the 'Download App' button", () => {
    const downloadButton = screen.getByRole("button", { name: "Download App" });
    expect(downloadButton).toBeInTheDocument();
    expect(downloadButton).toHaveClass("btn_green");
  });

  test("should render the 'How we work?' button with icon", () => {
    const howWeWorkButton = screen.getByRole("button", {
      name: /How we work\?/i,
    });
    expect(howWeWorkButton).toBeInTheDocument();
    expect(howWeWorkButton).toHaveClass("btn_white_text");
    const playIcon = screen.getByAltText("How we work?");
    expect(playIcon).toBeInTheDocument();
    expect(playIcon).toHaveAttribute(
      "src",
      expect.stringContaining("play.svg")
    );
  });

  test("should render the camp icon with alt text", () => {
    const campIcon = screen.getByAltText("camp");
    expect(campIcon).toBeInTheDocument();
    expect(campIcon).toHaveAttribute(
      "src",
      expect.stringContaining("/camp.svg")
    );
  });

  test("should render location, distance, and elevation data", () => {
    const locationText = screen.getByText("Location");
    const locationValue = screen.getByText("Aguas Calientes");
    const distanceText = screen.getByText("Distance");
    const distanceValue = screen.getByText("173.28 mi");
    const elevationText = screen.getByText("Elevation");
    const elevationValue = screen.getByText("2.040 km");

    expect(locationText).toBeInTheDocument();
    expect(locationValue).toBeInTheDocument();
    expect(distanceText).toBeInTheDocument();
    expect(distanceValue).toBeInTheDocument();
    expect(elevationText).toBeInTheDocument();
    expect(elevationValue).toBeInTheDocument();
  });

  test("should render close icon correctly", () => {
    const closeIcon = screen.getByAltText("close");
    expect(closeIcon).toBeInTheDocument();
    expect(closeIcon).toHaveAttribute(
      "src",
      expect.stringContaining("/close.svg")
    );
  });
});
