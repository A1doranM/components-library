import React from "react";
import { render, screen } from "@testing-library/react";

import Pencil from "../Pencil";

describe("Pencil", () => {
  test("Renders the Pencil component", () => {
    render(<Pencil />);
    const pencilIcon = screen.getByAltText("pencil") as HTMLImageElement;
    expect(pencilIcon.src).toContain("pencil");
  });
});
