import React from "react";
import { render, screen } from "@testing-library/react";

import TrashOutlined from "../TrashOutlined";

describe("TrashOutlined", () => {
  test("Renders the TrashOutlined component", () => {
    render(<TrashOutlined />);
    const trashOutlinedIcon = screen.getByAltText(
      "trash outlined"
    ) as HTMLImageElement;
    expect(trashOutlinedIcon.src).toContain("trash-outlined");
  });
});
