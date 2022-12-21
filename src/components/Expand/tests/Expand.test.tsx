import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Expand from "../Expand";

describe("Expand", () => {
  test("Renders the Expand component", () => {
    render(<Expand title="Open me" />);
    const expand = screen.getByTestId("expand");
    expect(expand).toBeInTheDocument();
  });
  test("Check Expand open/close behaviour", async () => {
    const events = userEvent.setup();
    render(
      <Expand title="Open me" open={true}>
        <div>ABC</div>
      </Expand>
    );
    const expand = screen.getByTestId("expand");
    const expandContent = expand.childNodes[1];
    const expandHeader = expand.childNodes[0];
    expect(expand).toBeInTheDocument();
    expect(expandContent).toBeVisible();
    expect(expandHeader).toHaveClass("expand__header expand_active");
  });
});
