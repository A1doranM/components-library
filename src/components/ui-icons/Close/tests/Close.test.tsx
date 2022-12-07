import React from "react";
import { render, screen } from "@testing-library/react";

import Close from "../Close";

describe("Close", () => {
  test("Renders the Close component", () => {
    render(<Close />);
    const closeIcon = screen.getByAltText("close") as HTMLImageElement;
    expect(closeIcon.src).toContain("close");
  });
});
