import React from "react";
import { render, screen } from "@testing-library/react";

import Status from "../Status";

describe("Status", () => {
  test("Renders the Status component", () => {
    render(<Status type="RECEIVED">отримано</Status>);
    const status = screen.getByTestId("status");
    expect(status).toBeInTheDocument();
  });
});
