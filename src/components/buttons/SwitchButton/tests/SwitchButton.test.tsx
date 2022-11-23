import React from "react";
import { render } from "@testing-library/react";

import SwitchButton from "../SwitchButton";

describe("SwitchButton", () => {
    test("Renders the SwitchButton component", () => {
        render(<SwitchButton />);
    })
});