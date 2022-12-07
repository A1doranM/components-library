import React from "react";
import { render, screen } from "@testing-library/react";

import GrayEye from "../GrayEye";

describe("GrayEye", () => {
  test("Renders the GrayEye component", () => {
    render(<GrayEye />);
    const grayEyeIcon = screen.getByAltText("gray eye") as HTMLImageElement;
    expect(grayEyeIcon.src).toContain("gray-eye");
  });
});
