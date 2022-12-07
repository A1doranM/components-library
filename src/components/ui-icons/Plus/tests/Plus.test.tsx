import React from "react";
import { render, screen } from "@testing-library/react";

import Plus from "../Plus";

describe("Plus", () => {
  test("Renders the Plus component", () => {
    render(<Plus />);
    const plusIcon = screen.getByAltText("plus") as HTMLImageElement;
    expect(plusIcon.src).toContain("plus");
  });
});
