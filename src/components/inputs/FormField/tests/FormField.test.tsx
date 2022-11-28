import React from "react";
import { render } from "@testing-library/react";

import FormField from "components/inputs/FormField";

describe("FormField", () => {
  test("Renders the FormField component", () => {
    render(<FormField />);
  });
});
