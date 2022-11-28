import React from "react";
import { render } from "@testing-library/react";

import Notification from "../Notification";

describe("Notification", () => {
    test("Renders the Notification component", () => {
        render(<Notification text="Open me"/>);
    })
});