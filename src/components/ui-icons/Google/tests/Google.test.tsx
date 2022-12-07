import React from "react";
import { render, screen } from "@testing-library/react";

import Google from "../Google";

describe("Google", () => {
  test("Renders the Google component", () => {
    render(<Google />);
    const googleIcon = screen.getByAltText("google") as HTMLImageElement;
    expect(googleIcon.src).toContain("google");
  });
});
