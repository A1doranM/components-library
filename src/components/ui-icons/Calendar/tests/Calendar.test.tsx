import React from "react";
import { render, screen } from "@testing-library/react";

import Calendar from "../Calendar";

describe("Calendar", () => {
  test("Renders the Calendar component", () => {
    render(<Calendar />);
    const calendarIcon = screen.getByAltText("calendar") as HTMLImageElement;
    expect(calendarIcon.src).toContain("calendar");
  });
});
