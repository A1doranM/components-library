import React from "react";
import { render } from "@testing-library/react";

import BlankPage from "../index";

describe("BlankPage", () => {

  test("Renders the Expand component", () => {
    render(<BlankPage title="test" />);
  });
});
