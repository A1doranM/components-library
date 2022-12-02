import React from "react";
import { render, screen } from "@testing-library/react";

import Document from "../Document";

describe("Document", () => {
  test("Renders the Document component", () => {
    render(<Document />);
    const documentIcon = screen.getByAltText("document") as HTMLImageElement;
    expect(documentIcon.src).toContain("document");
  });
});
