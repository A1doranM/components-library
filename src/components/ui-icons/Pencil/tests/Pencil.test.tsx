import React from "react";
import { render } from "@testing-library/react";

import Pencil from "../Pencil";

describe("Pencil", () => {
    test("Renders the Pencil component", () => {
        render(<Pencil />);
    })
});