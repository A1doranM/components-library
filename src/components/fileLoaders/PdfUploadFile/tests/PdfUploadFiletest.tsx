import React from "react";
import { render } from "@testing-library/react";

import PdfUploadFile from "../PdfUploadFile";

describe("PdfUploadFile", () => {
    test("Renders the PdfUploadFile component", () => {
        render(<PdfUploadFile title="Open me"/>);
    })
});