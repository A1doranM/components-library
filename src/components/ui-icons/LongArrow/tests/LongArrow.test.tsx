import React from "react";
import { render, screen } from "@testing-library/react";

import LongArrow from "../LongArrow";

describe("LongArrow", () => {
  test("Renders the LongArrow component", () => {
    render(<LongArrow />);
    const longArrowIcon = screen.getByAltText("long arrow") as HTMLImageElement;
    expect(longArrowIcon.src).toContain("long-arrow");
  });
});
