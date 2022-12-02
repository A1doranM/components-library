import React from "react";
import { render, screen } from "@testing-library/react";

import Copy from "../Copy";

describe("Copy", () => {
  test("Renders the Copy component", () => {
    render(<Copy />);
    const copyIcon = screen.getByAltText("copy") as HTMLImageElement;
    expect(copyIcon.src).toContain("copy");
  });
});
