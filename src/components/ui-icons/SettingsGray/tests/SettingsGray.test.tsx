import React from "react";
import { render, screen } from "@testing-library/react";

import SettingsGray from "../SettingsGray";

describe("SettingsGray", () => {
  test("Renders the SettingsGray component", () => {
    render(<SettingsGray />);
    const settingsGrayIcon = screen.getByAltText(
      "settings gray"
    ) as HTMLImageElement;
    expect(settingsGrayIcon.src).toContain("settings-gray");
  });
});
