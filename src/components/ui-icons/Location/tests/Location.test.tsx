import React from "react";
import { render, screen } from "@testing-library/react";

import Location from "../Location";

describe("Location", () => {
  test("Renders the Location component", () => {
    render(<Location />);
    const locationIcon = screen.getByAltText("location") as HTMLImageElement;
    expect(locationIcon.src).toContain("location");
  });
});
