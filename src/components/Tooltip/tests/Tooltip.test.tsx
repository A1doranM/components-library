import React from "react";
import { render, screen } from "@testing-library/react";

import Tooltip from "../index";

describe("Tooltip", () => {
  test("Renders the Expand component", () => {
    render(<Tooltip>dsfsd</Tooltip>);
    const expand = screen.getByTestId("tooltip");
    expect(expand).toBeInTheDocument();
  });
});
