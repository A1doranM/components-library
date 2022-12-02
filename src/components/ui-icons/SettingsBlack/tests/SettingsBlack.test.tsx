import React from "react";
import { render, screen } from "@testing-library/react";

import SettingsBlack from "../SettingsBlack";

describe("SettingsBlack", () => {
  test("Renders the SettingsBlack component", () => {
    render(<SettingsBlack />);
    const settingsBlackIcon = screen.getByAltText(
      "settings black"
    ) as HTMLImageElement;
    expect(settingsBlackIcon.src).toContain("settings-black");
  });
});
