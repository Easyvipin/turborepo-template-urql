import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonUsage from "../index";

describe("ButtonUsage Component", () => {
  it("render snapshot", () => {
    const { container } = render(<ButtonUsage />);
    expect(container).toMatchSnapshot();
  });

  it("renders without crashing", () => {
    const { getByText } = render(<ButtonUsage />);
    const buttonElement = getByText("Hello world");
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders the custom button with specified styles", () => {
    const { getByText } = render(<ButtonUsage />);
    const buttonElement = getByText("Hello world");

    expect(buttonElement).toHaveStyle("color: yellow");
    expect(buttonElement).toHaveStyle(
      "background-color: rgba(25, 118, 210, 0.04)"
    );
  });
});
