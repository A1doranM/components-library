import React from "react";
import { render } from "@testing-library/react";

import RadioButton from "../RadioButton";

describe("RadioButton", () => {
  test("Renders the RadioButton component", () => {
    render(<RadioButton name="test" value="test" checked={true} onClick={() => console.log("clicked")}/>);
  });
});
