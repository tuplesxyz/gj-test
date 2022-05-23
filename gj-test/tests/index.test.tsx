
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);
    expect(
      screen.getByText(
        /Discover and deploy boilerplate example Next.js projects./i
      )
    ).toBeInTheDocument();
  });
});
