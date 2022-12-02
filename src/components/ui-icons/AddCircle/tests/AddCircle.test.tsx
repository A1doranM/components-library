import React from "react";
import { render, screen } from "@testing-library/react";

import AddCircle from "../AddCircle";

describe("AddCircle", () => {
  test("Renders the AddCircle component", () => {
    render(<AddCircle />);
    const addCircleIcon = screen.getByAltText("add circle") as HTMLImageElement;
    expect(addCircleIcon.src).toContain("add-circle");
  });
});
