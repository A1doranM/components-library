import React from "react";
import { render } from "@testing-library/react";

import Status from "../Status";

describe("Status", () => {
    test("Renders the Status component", () => {
        render(<Status type="RECEIVED"/>);
    })
});