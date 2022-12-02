import React from "react";
import { render, screen } from "@testing-library/react";

import ShortFilledArrow from "../ShortFilledArrow";

describe("ShortFilledArrow", () => {
  test("Renders the ShortFilledArrow component", () => {
    render(<ShortFilledArrow />);
    const shortFilledArrowIcon = screen.getByAltText(
      "short filled arrow"
    ) as HTMLImageElement;
    expect(shortFilledArrowIcon.src).toContain("short-filled-arrow");
  });
});
