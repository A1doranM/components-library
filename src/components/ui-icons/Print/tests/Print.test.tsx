import React from "react";
import { render, screen } from "@testing-library/react";

import Print from "../Print";

describe("Print", () => {
  test("Renders the Print component", () => {
    render(<Print />);
    const printIcon = screen.getByAltText("print") as HTMLImageElement;
    expect(printIcon.src).toContain("print");
  });
});
