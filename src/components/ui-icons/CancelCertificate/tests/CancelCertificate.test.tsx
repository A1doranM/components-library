import React from "react";
import { render } from "@testing-library/react";

import CancelCertificate from "../CancelCertificate";

describe("CancelCertificate", () => {
    test("Renders the CancelCertificate component", () => {
        render(<CancelCertificate />);
    })
});