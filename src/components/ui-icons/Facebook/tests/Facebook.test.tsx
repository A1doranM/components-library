import React from "react";
import { render, screen } from "@testing-library/react";

import Facebook from "../Facebook";

describe("Facebook", () => {
  test("Renders the Facebook component", () => {
    render(<Facebook />);
    const facebookIcon = screen.getByAltText("facebook") as HTMLImageElement;
    expect(facebookIcon.src).toContain("facebook");
  });
});
