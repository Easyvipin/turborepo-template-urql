import React from "react";
import { render } from "@testing-library/react";
import HelloWorld from "../index";

test("renders HelloWorld component correctly", () => {
  const { container } = render(<HelloWorld />);
  expect(container.firstChild).toMatchSnapshot();
});
