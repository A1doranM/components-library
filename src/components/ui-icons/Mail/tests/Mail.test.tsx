import React from "react";
import { render } from "@testing-library/react";

import Mail from "../Mail";

describe("Mail", () => {
    test("Renders the Mail component", () => {
        render(<Mail />);
    })
});