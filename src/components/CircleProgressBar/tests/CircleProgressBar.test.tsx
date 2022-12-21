import React from "react";
import { render, screen } from "@testing-library/react";

import CircleProgressBar from "../CircleProgressBar";

describe("CircleProgressBar", () => {
  test("Renders the CircleProgressBar component", () => {
    render(<CircleProgressBar progress={50} />);
    const progressBarWrapper = screen.getByTestId("circle-progress-bar");
    expect(progressBarWrapper).toBeInTheDocument();
    screen.debug();
  });
  test("Check CircleProgressBar progress value", () => {
    render(<CircleProgressBar progress={50} />);
    const progressBarWrapper = screen.getByTestId("circle-progress-bar");
    const progressBar = progressBarWrapper.getElementsByClassName(
      "circle-progress-bar__bar"
    )[0];
    expect(progressBarWrapper).toBeInTheDocument();
    expect(progressBar).toHaveAttribute("stroke-dashoffset", "85");
    screen.debug();
  });
});
