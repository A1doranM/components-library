import React from "react";
import { render, screen } from "@testing-library/react";

import Enter from "../Enter";

describe("Enter", () => {
  test("Renders the Enter component", () => {
    render(<Enter />);
    const enterIcon = screen.getByAltText("enter") as HTMLImageElement;
    expect(enterIcon.src).toContain("enter");
  });
});
