// src/__tests__/RootLayout.test.tsx
import RootLayout from "@/app/layout";
import { render, screen } from "@testing-library/react";

describe("RootLayout", () => {
  test("renders NavBar and Footer", () => {
    render(
      <RootLayout>
        <div>Test Content</div>
      </RootLayout>
    );

    //Navbar & Footer
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();

    // Should render the text give it
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });
});
