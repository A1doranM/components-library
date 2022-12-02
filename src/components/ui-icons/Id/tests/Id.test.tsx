import React from "react";
import { render, screen } from "@testing-library/react";

import Id from "../Id";

describe("Id", () => {
  test("Renders the Id component", () => {
    render(<Id />);
    const idIcon = screen.getByAltText("id") as HTMLImageElement;
    expect(idIcon.src).toContain("id");
  });
});
