import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";

describe("App", () => {
  it("Loads and displays heading.", () => {
    render(<App />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("Loads and displays location search.", () => {
    render(<App />);
    const search = screen.getByTestId("location-search-input");
    expect(search).toBeInTheDocument();
  });
});
