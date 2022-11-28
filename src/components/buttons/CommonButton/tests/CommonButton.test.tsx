import React from "react";
import { render } from "@testing-library/react";

import CommonButton from "../CommonButton";

describe("CommonButton", () => {
    test("Renders the CommonButton component", () => {
        render(<CommonButton label="Hello world"/>);
    })
});