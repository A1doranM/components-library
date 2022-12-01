import React from "react";
import { render } from "@testing-library/react";

import Clock from "../Clock";

describe("Clock", () => {
    test("Renders the Clock component", () => {
        render(<Clock />);
    })
});