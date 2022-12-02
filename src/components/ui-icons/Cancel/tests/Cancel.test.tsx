import React from "react";
import { render, screen } from "@testing-library/react";

import Cancel from "../Cancel";

describe("Cancel", () => {
  test("Renders the Cancel component", () => {
    render(<Cancel />);
    const cancelIcon = screen.getByAltText("cancel") as HTMLImageElement;
    expect(cancelIcon.src).toContain("cancel");
  });
});
