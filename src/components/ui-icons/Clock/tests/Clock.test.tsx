import React from "react";
import { render, screen } from "@testing-library/react";

import Clock from "../Clock";

describe("Clock", () => {
  test("Renders the Clock component", () => {
    render(<Clock />);
    const clockIcon = screen.getByAltText("clock") as HTMLImageElement;
    expect(clockIcon.src).toContain("clock");
  });
});
