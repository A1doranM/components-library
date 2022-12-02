import React from "react";
import { render, screen } from "@testing-library/react";

import Checkmark from "../Checkmark";

describe("Checkmark", () => {
  test("Renders the Checkmark component", () => {
    render(<Checkmark />);
    const checkmarkIcon = screen.getByAltText("checkmark") as HTMLImageElement;
    expect(checkmarkIcon.src).toContain("checkmark");
  });
});
