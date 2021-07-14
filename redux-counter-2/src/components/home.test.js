import React from "react";
import { fireEvent, render } from "@testing-library/react";
import Home from "./Home";

it("renders correctly", () => {
  const { getByTestId } = render(<Home />);

  expect(getByTestId("h2Tag")).toBeTruthy();
  expect(getByTestId("incrementButton")).toBeTruthy();
  expect(getByTestId("decrementButton")).toBeTruthy();
});

it("initially count will be zero", () => {
  const { getByTestId } = render(<Home count={0} />);
  expect(getByTestId("h2Tag").textContent).toBe("Count : 0");
});

describe("increment and decrement button", () => {
  it("onclick on increment button must be dispatch", () => {
    const incrementCount = jest.fn();
    const { getByTestId } = render(<Home incrementCount={incrementCount} />);
    fireEvent.click(getByTestId("incrementButton"));
    expect(incrementCount).toHaveBeenCalled();
  });

  it("onclick on decrement button must be dispatch", () => {
    const decrementCount = jest.fn();
    const { getByTestId } = render(<Home decrementCount={decrementCount} />);
    fireEvent.click(getByTestId("decrementButton"));
    expect(decrementCount).toHaveBeenCalled();
  });
});
