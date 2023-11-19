import { render, fireEvent, screen } from "@testing-library/react";
import App from "../src/App";
import { expect, test } from "vitest";

test("should render the App", () => {
  render(<App />);
  expect(screen.getByTestId("app-component")).toBeInTheDocument();
});

test("should have enabled button when texboxes are not empty", () => {
  render(<App />);

  const button = screen.getByTestId("submit-button");
  expect(button).toBeDisabled();

  const usernameInput = screen.getByTestId("username-input");
  const passwordInput = screen.getByTestId("password-input");

  fireEvent.change(usernameInput, { target: { value: "test" } });
  fireEvent.change(passwordInput, { target: { value: "test" } });

  expect(button).not.toBeDisabled();
});
