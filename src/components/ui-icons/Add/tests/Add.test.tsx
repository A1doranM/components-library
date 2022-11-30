import React from "react";
import { render } from "@testing-library/react";

import Add from "../Add";

describe("Add", () => {
    test("Renders the Add component", () => {
        render(<Add />);
    })
});