import { render, screen } from "@testing-library/react";
import React from "react";
import Test from "../src/Test";

describe("App", () => {
  it("renders headline", () => {
    render(<Test />);
    const headline = screen.getByText(/It works and you found me!/i);
    expect(headline).toBeInTheDocument();
  });
});
