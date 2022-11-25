import React from "react";
import { render } from "@testing-library/react";

import Expand from "../Expand";

describe("Expand", () => {
    test("Renders the Expand component", () => {
        render(<Expand title="Open me"/>);
    })
});