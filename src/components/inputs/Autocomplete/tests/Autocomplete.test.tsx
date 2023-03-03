import React from "react";
import { render } from "@testing-library/react";

import Autocomplete from "../Autocomplete";

describe("Autocomplete", () => {
  test("Renders the Select component", () => {
    render(<Autocomplete />);
  });
});
