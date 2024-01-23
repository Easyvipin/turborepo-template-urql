import React from "react";
import { render } from "@testing-library/react";
import LandingPage from "../index";

test("renders LandingPage snapshot", () => {
  const { container } = render(<LandingPage />);
  expect(container).toMatchSnapshot();
});
