import React from "react";
import { render, screen } from "@testing-library/react";

import GrayDisabledEye from "../GrayDisabledEye";

describe("GrayDisabledEye", () => {
  test("Renders the GrayDisabledEye component", () => {
    render(<GrayDisabledEye />);
    const grayDisabledEyeIcon = screen.getByAltText(
      "gray disabled eye"
    ) as HTMLImageElement;
    expect(grayDisabledEyeIcon.src).toContain("gray-disabled-eye");
  });
});
