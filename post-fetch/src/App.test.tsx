import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

const mock = function () {
  return {
    observe: jest.fn(),
    disconnect: jest.fn(),
    unobserve: jest.fn(),
  };
};

window.IntersectionObserver = mock;

test("shoud render component correctly", () => {
  render(<App />);
});
