import React from "react";
import { render, screen } from "@testing-library/react";

import Help from "../Help";

describe("Help", () => {
  test("Renders the Help component", () => {
    render(<Help />);
    const helpIcon = screen.getByAltText("help") as HTMLImageElement;
    expect(helpIcon.src).toContain("help");
  });
});
