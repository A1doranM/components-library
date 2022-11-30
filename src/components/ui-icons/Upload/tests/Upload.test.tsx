import React from "react";
import { render } from "@testing-library/react";

import Upload from "../Upload";

describe("Upload", () => {
    test("Renders the Upload component", () => {
        render(<Upload />);
    })
});