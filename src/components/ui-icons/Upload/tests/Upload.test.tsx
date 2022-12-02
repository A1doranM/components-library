import React from "react";
import { render, screen } from "@testing-library/react";

import Upload from "../Upload";

describe("Upload", () => {
  test("Renders the Upload component", () => {
    render(<Upload />);
    const uploadIcon = screen.getByAltText("upload") as HTMLImageElement;
    expect(uploadIcon.src).toContain("upload");
  });
});
