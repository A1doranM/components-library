import React from "react";
import { render, screen } from "@testing-library/react";

import Add from "../Add";

describe("Add", () => {
  test("Renders the Add component", () => {
    render(<Add />);
    const addIcon = screen.getByAltText("add") as HTMLImageElement;
    expect(addIcon.src).toContain("add");
  });
});
