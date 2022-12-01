import React from "react";
import { render } from "@testing-library/react";

import Location from "../Location";

describe("Location", () => {
    test("Renders the Location component", () => {
        render(<Location />);
    })
});