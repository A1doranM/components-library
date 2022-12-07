import React from "react";
import { render, screen } from "@testing-library/react";

import Download from "../Download";

describe("Download", () => {
  test("Renders the Download component", () => {
    render(<Download />);
    const downloadIcon = screen.getByAltText("download") as HTMLImageElement;
    expect(downloadIcon.src).toContain("download");
  });
});
