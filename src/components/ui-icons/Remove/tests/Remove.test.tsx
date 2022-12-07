import React from "react";
import { render, screen } from "@testing-library/react";

import Remove from "../Remove";

describe("Remove", () => {
  test("Renders the Remove component", () => {
    render(<Remove />);
    const removeIcon = screen.getByAltText("remove") as HTMLImageElement;
    expect(removeIcon.src).toContain("remove");
  });
});
