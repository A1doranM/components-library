import React from "react";
import { render, screen } from "@testing-library/react";

import Reload from "../Reload";

describe("Reload", () => {
  test("Renders the Reload component", () => {
    render(<Reload />);
    const reloadIcon = screen.getByAltText("reload") as HTMLImageElement;
    expect(reloadIcon.src).toContain("reload");
  });
});
