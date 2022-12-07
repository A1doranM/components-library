import React from "react";
import { render, screen } from "@testing-library/react";

import Grn from "../Grn";

describe("Grn", () => {
  test("Renders the Grn component", () => {
    render(<Grn />);
    const grnIcon = screen.getByAltText("UAH") as HTMLImageElement;
    expect(grnIcon.src).toContain("grn");
  });
});
