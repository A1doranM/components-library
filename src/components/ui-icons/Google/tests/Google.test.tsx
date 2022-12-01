import React from "react";
import { render } from "@testing-library/react";

import Google from "../Google";

describe("Google", () => {
  test("Renders the Google component", () => {
    render(<Google />);
  });
});
