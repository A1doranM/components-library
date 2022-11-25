import React from "react";
import { render } from "@testing-library/react";

import CircleProgressBar from "../CircleProgressBar";

describe("CircleProgressBar", () => {
    test("Renders the CircleProgressBar component", () => {
        render(<CircleProgressBar progress={50}/>);
    })
});