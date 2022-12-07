import React from "react";
import { render, screen } from "@testing-library/react";

import TrashDefault from "../TrashDefault";

describe("TrashDefault", () => {
  test("Renders the TrashDefault component", () => {
    render(<TrashDefault />);
    const trashDefaultIcon = screen.getByAltText(
      "trash default"
    ) as HTMLImageElement;
    expect(trashDefaultIcon.src).toContain("trash-default");
  });
});
