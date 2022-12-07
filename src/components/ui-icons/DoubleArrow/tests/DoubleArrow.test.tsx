import React from "react";
import { render, screen } from "@testing-library/react";

import DoubleArrow from "../DoubleArrow";

describe("DoubleArrow", () => {
  test("Renders the DoubleArrow component", () => {
    render(<DoubleArrow />);
    const doubleArrowIcon = screen.getByAltText(
      "double arrow"
    ) as HTMLImageElement;
    expect(doubleArrowIcon.src).toContain("double-arrow");
  });
});
