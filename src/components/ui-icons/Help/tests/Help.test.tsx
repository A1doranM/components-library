import React from "react";
import { render } from "@testing-library/react";

import Help from "../Help";

describe("Help", () => {
    test("Renders the Help component", () => {
        render(<Help />);
    })
});