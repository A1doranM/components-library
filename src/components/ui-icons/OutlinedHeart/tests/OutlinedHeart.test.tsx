import React from "react";
import { render, screen } from "@testing-library/react";

import OutlinedHeart from "../OutlinedHeart";

describe("OutlinedHeart", () => {
  test("Renders the OutlinedHeart component", () => {
    render(<OutlinedHeart />);
    const outlinedHeartIcon = screen.getByAltText(
      "outlined heart"
    ) as HTMLImageElement;
    expect(outlinedHeartIcon.src).toContain("outlined-heart");
  });
});
