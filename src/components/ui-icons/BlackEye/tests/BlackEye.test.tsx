import React from "react";
import { render, screen } from "@testing-library/react";

import BlackEye from "../BlackEye";

describe("BlackEye", () => {
  test("Renders the BlackEye component", () => {
    render(<BlackEye />);
    const blackEyeIcon = screen.getByAltText("black eye") as HTMLImageElement;
    expect(blackEyeIcon.src).toContain("black-eye");
  });
});
