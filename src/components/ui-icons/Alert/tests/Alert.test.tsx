import React from "react";
import { render, screen } from "@testing-library/react";

import Alert from "../Alert";

describe("Alert", () => {
  test("Renders the Alert component", () => {
    render(<Alert />);
    const alertIcon = screen.getByAltText("alert") as HTMLImageElement;
    expect(alertIcon.src).toContain("alert");
  });
});
