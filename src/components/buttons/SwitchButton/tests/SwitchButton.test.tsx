import React from "react";
import { render, screen } from "@testing-library/react";

import SwitchButton from "../SwitchButton";

describe("SwitchButton", () => {
  test("Renders the SwitchButton component", () => {
    render(<SwitchButton />);
    const button = screen.getByTestId("switch-button");
    expect(button).toBeInTheDocument();
    screen.debug();
  });
});
