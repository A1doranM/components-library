import React from "react";
import { render, screen } from "@testing-library/react";

import ShortArrow from "../ShortArrow";

describe("ShortArrow", () => {
  test("Renders the ShortArrow component", () => {
    render(<ShortArrow />);
    const shortArrowIcon = screen.getByAltText(
      "short arrow"
    ) as HTMLImageElement;
    expect(shortArrowIcon.src).toContain("short-arrow");
  });
});
