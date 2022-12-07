import React from "react";
import { render, screen } from "@testing-library/react";

import Mail from "../Mail";

describe("Mail", () => {
  test("Renders the Mail component", () => {
    render(<Mail />);
    const mailIcon = screen.getByAltText("mail") as HTMLImageElement;
    expect(mailIcon.src).toContain("mail");
  });
});
