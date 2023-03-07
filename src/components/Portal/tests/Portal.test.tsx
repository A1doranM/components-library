import React from "react";
import { render } from "@testing-library/react";

import Portal from "../index";

describe("Portal", () => {
  test("Renders the Portal component", () => {
    render(<Portal><p>asd</p></Portal>);
  });
});
