import React from "react";
import { render, screen } from "@testing-library/react";

import Lock from "../Lock";

describe("Lock", () => {
  test("Renders the Lock component", () => {
    render(<Lock />);
    const lockIcon = screen.getByAltText("lock") as HTMLImageElement;
    expect(lockIcon.src).toContain("lock");
  });
});
