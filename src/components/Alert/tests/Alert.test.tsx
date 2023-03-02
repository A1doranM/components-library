import React from "react";
import { render } from "@testing-library/react";

import Alert from "../Alert";

describe("Notification", () => {
  test("Renders the Notification component", () => {
    render(<Alert text="Open me" type="success" />);
  });
});
