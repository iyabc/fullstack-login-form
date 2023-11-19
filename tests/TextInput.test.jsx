import { render, screen, fireEvent } from "@testing-library/react";
import TextInput from "../src/components/TextInput";
import { expect, test } from "vitest";

test("should render the TextInput", () => {
  render(
    <TextInput
      id="test"
      type="text"
      placeholderText="Test"
      handleValueChanges={() => {}}
    />
  );
  expect(screen.getByTestId("text-input")).toBeInTheDocument();
});

test("should be able to type", () => {
  render(
    <TextInput
      id="test"
      type="text"
      placeholderText="Test"
      handleValueChanges={() => {}}
    />
  );

  const inputElement = screen.getByTestId("test-input");
  fireEvent.change(inputElement, { target: { value: "Hello, World!" } });

  expect(inputElement.value).toBe("Hello, World!");
});

test("should render the label", () => {
  render(
    <TextInput
      id="test"
      type="text"
      placeholderText="Test"
      handleValueChanges={() => {}}
    />
  );

  expect(screen.getByTestId("test-label")).toBeInTheDocument();
});
