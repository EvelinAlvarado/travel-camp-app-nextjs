import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home Page", () => {
  test("renders the Hero, Camp, Guide, Features, and GetApp components", () => {
    render(<Home />);

    expect(screen.getByText(/Putuk Truno Camp Area/i)).toBeInTheDocument();
    expect(screen.getByText(/Mountain View Camp/i)).toBeInTheDocument();
    expect(screen.getByText(/Guide You to Easy Path/i)).toBeInTheDocument();
    expect(screen.getByText(/Our Features/i)).toBeInTheDocument();
    expect(screen.getByText(/Download App/i)).toBeInTheDocument();
  });
});
