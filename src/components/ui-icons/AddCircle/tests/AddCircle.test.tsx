import React from "react";
import { render } from "@testing-library/react";

import AddCircle from "../AddCircle";

describe("AddCircle", () => {
    test("Renders the AddCircle component", () => {
        render(<AddCircle />);
    })
});