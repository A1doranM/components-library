import React from "react";
import { render } from "@testing-library/react";

import Facebook from "../Facebook";

describe("Facebook", () => {
  test("Renders the Facebook component", () => {
    render(<Facebook />);
  });
});
