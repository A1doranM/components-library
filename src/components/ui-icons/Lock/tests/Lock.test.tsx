import React from "react";
import { render } from "@testing-library/react";

import Lock from "../Lock";

describe("Lock", () => {
    test("Renders the Lock component", () => {
        render(<Lock />);
    })
});