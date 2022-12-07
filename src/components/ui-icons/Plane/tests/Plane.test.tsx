import React from "react";
import { render, screen } from "@testing-library/react";

import Plane from "../Plane";

describe("Plane", () => {
  test("Renders the Plane component", () => {
    render(<Plane />);
    const planeIcon = screen.getByAltText("plane") as HTMLImageElement;
    expect(planeIcon.src).toContain("plane");
  });
});
