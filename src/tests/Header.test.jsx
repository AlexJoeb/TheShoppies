import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Header from "../Components/Header";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  if (container !== null) {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
  }
});

it("renders correct text in header", () => {
  act(() => {
    render(<Header />, container);
  });
  expect(container?.textContent).toBe(
    "The ShoppiesMovie Awards for Entrepreneurs"
  );
});
