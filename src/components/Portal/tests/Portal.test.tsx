import React from "react";
import { render, screen } from "@testing-library/react";

import Tooltip from "../index";

describe("Expand", () => {
  test("Renders the Expand component", () => {
    render(<Tooltip>dsfsd</Tooltip>);
    const expand = screen.getByTestId("expand");
    expect(expand).toBeInTheDocument();
  });
});
