import React from "react";
import { render } from "@testing-library/react";

import Calendar from "../Calendar";

describe("Calendar", () => {
    test("Renders the Calendar component", () => {
        render(<Calendar />);
    })
});