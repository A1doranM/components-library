import React from "react";
import { render } from "@testing-library/react";

import CorrectButton from "../CorrectButton";

describe("CommonButton", () => {
    test("Renders the CorrectButton component", () => {
        render(<CorrectButton label="Hello world"/>);
    })
});