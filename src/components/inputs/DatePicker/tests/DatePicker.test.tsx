import React from "react";
import { render } from "@testing-library/react";

import DatePicker from "../DatePicker";

describe("DatePicker", () => {
  test("Renders the DatePicker component", () => {
    render(
      <DatePicker
        onChange={(date: Date): void => {
          console.log(Date);
        }}
      />
    );
  });
});
