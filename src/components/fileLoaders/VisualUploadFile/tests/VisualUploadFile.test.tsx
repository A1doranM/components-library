import React from "react";
import { render } from "@testing-library/react";

import VisualUploadFile from "../VisualUploadFile";

describe("VisualUploadFile", () => {
    test("Renders the VisualUploadFile component", () => {
        render(<VisualUploadFile title="Open me"/>);
    })
});