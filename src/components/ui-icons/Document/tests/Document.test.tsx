import React from "react";
import { render } from "@testing-library/react";

import Document from "../Document";

describe("Document", () => {
    test("Renders the Document component", () => {
        render(<Document />);
    })
});