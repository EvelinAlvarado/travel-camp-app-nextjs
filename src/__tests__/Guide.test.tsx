import { Guide } from "@/components/Guide";
import { render, screen } from "@testing-library/react";

describe("Guide Component", () => {
  beforeEach(() => {
    render(<Guide />);
  });

  test("should render camp image correctly", () => {
    const campImg = screen.getByRole("img", { name: "camp" });
    expect(campImg).toBeInTheDocument();
    expect(campImg).toHaveAttribute("src", expect.stringContaining("camp.svg"));
  });

  test("should render paragraph and title correctly", () => {
    expect(screen.getByText("We are here for you")).toBeInTheDocument();
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Guide You to Easy Path"
    );
  });

  test("should render a boat image", () => {
    const boatImg = screen.getByRole("img", { name: "boat" });
    expect(boatImg).toBeInTheDocument();
    expect(boatImg).toHaveAttribute("src", expect.stringContaining("boat.png"));
  });
});
