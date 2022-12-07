import React from "react";
import { render, screen } from "@testing-library/react";

import Swap from "../Swap";

describe("Swap", () => {
  test("Renders the Swap component", () => {
    render(<Swap />);
    const swapIcon = screen.getByAltText("swap") as HTMLImageElement;
    expect(swapIcon.src).toContain("swap");
  });
});
