import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Button from "./Button";
import { vi } from "vitest";

describe("Button", () => {
  it("Renders with text.", async () => {
    render(<Button text="I'm a test button" dataTestID="test-button" />);
    const testButton = screen.getByText("I'm a test button");
    expect(testButton).toBeInTheDocument();
  });

  it("Can call an onClick callback.", () => {
    const onClick = vi.fn();
    render(<Button text="test" dataTestID="test-button" onClick={onClick} />);
    const button = screen.getByTestId("test-button");
    button.click();
    expect(onClick).toHaveBeenCalled();
  });
});
