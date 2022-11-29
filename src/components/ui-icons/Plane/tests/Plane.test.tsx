import React from "react";
import { render } from "@testing-library/react";

import Plane from "../Plane";

describe("Plane", () => {
    test("Renders the Plane component", () => {
        render(<Plane />);
    })
});