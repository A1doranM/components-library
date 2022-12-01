import React from "react";
import { render } from "@testing-library/react";

import Person from "../Person";

describe("Person", () => {
  test("Renders the Person component", () => {
    render(<Person />);
  });
});
