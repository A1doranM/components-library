import React from "react";
import { render } from "@testing-library/react";

import FilledHeart from "../FilledHeart";

describe("FilledHeart", () => {
    test("Renders the FilledHeart component", () => {
        render(<FilledHeart />);
    })
});