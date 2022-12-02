import React from "react";
import { render, screen } from "@testing-library/react";

import FilledHeart from "../FilledHeart";

describe("FilledHeart", () => {
  test("Renders the FilledHeart component", () => {
    render(<FilledHeart />);
    const filledHeartIcon = screen.getByAltText(
      "filled heart"
    ) as HTMLImageElement;
    expect(filledHeartIcon.src).toContain("filled-heart");
  });
});
