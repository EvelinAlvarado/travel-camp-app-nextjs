import { GetApp } from "@/components/GetApp";
import { render, screen } from "@testing-library/react";

describe("", () => {
  beforeEach(() => {
    render(<GetApp />);
  });

  test("should render the title in a h2 tag", () => {
    expect(screen.getByRole("heading", { name: /Get for free now!/i }));
  });

  test("should render a paragraph", () => {
    expect(
      screen.getByText(/Available on iOS and Android/i)
    ).toBeInTheDocument();
  });

  test("should render 2 buttons correctly", () => {
    const buttons = screen
      .getAllByRole("button")
      .filter((button) => button.getAttribute("type") === "button");
    expect(buttons.length).toBe(2);
    expect(buttons[0]).toHaveTextContent("App Store");
    expect(buttons[1]).toHaveTextContent("Play Store");
  });

  test("should render phones image correctly", () => {
    const altImages = screen.getByRole("img", { name: "phones" });
    expect(altImages).toBeInTheDocument();
    expect(altImages).toHaveAttribute(
      "src",
      expect.stringContaining("phones.png")
    );
  });
});
