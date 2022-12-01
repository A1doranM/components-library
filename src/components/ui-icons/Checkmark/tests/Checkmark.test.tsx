import React from "react";
import { render } from "@testing-library/react";

import Checkmark from "../Checkmark";

describe("Checkmark", () => {
    test("Renders the Checkmark component", () => {
        render(<Checkmark />);
    })
});