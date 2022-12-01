import React from "react";
import { render } from "@testing-library/react";

import Alert from "../Alert";

describe("Alert", () => {
    test("Renders the Alert component", () => {
        render(<Alert />);
    })
});