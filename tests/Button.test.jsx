import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../src/components/Button";
import { expect, test, vi } from "vitest";

test("should render the Button", () => {
  render(<Button />);
  const button = screen.getByTestId("submit-button");
  expect(button).toBeInTheDocument();
});

test("should be clicked", () => {
  const handleClick = vi.fn();
  render(
    <Button
      onClick={handleClick}
      disabled={false}
    />
  );
  const button = screen.getByTestId("submit-button");
  fireEvent.click(button);
  expect(handleClick).toBeCalled();
});

test("should be disabled", () => {
  render(<Button disabled={true} />);
  const button = screen.getByTestId("submit-button");
  expect(button).toBeDisabled();
});

test("should correctly render text inside", () => {
  render(<Button />);
  const button = screen.getByTestId("submit-button");
  expect(button).toHaveTextContent("Sign In");
});
