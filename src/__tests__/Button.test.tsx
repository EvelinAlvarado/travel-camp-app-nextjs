import { Button } from "@/components/Button";
import { render, screen } from "@testing-library/react";

describe("Button Component passing button type, title and variant props", () => {
  let buttonType: HTMLElement;

  beforeEach(() => {
    render(<Button type="button" title="button title" variant="variantTest" />);
    buttonType = screen.getByRole("button");
  });

  test("should render button type and not submit type", () => {
    expect(buttonType).toBeInTheDocument();
    expect(buttonType).toHaveAttribute("type", "button");
    expect(buttonType).not.toHaveAttribute("type", "submit");
  });

  test("should render a button title", () => {
    expect(buttonType).toHaveTextContent("button title");
  });

  test("should render a variant props", () => {
    expect(buttonType).toHaveClass("variantTest");
  });

  test("not should render an image element", () => {
    const imgElement = screen.queryByRole("img");
    expect(imgElement).not.toBeInTheDocument();
  });
  test("should not apply full class when full prop is true", () => {
    expect(buttonType).not.toHaveClass("w-full");
  });
});

describe("Button Component passing submit type and optional props", () => {
  let buttonType: HTMLElement;

  beforeEach(() => {
    render(
      <Button
        type="submit"
        title="button title"
        variant="variantTest"
        icon="/iconImage"
        full
      />
    );
    buttonType = screen.getByRole("button");
  });
  test("should render a type submit and not should render type button", () => {
    expect(buttonType).toBeInTheDocument();
    expect(buttonType).toHaveAttribute("type", "submit");
    expect(buttonType).not.toHaveAttribute("type", "button");
  });

  test("should render an image with source and alt attribute", () => {
    const imgElement = screen.getByRole("img");
    expect(imgElement).toHaveAttribute(
      "src",
      expect.stringContaining("iconImage")
    );
    expect(imgElement).toHaveAttribute("alt", "button title");
  });

  test("should apply full class when full prop is true", () => {
    expect(buttonType).toHaveClass("w-full");
  });
});
