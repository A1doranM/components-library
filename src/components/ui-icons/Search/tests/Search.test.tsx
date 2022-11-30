import React from "react";
import { render } from "@testing-library/react";

import Search from "../Search";

describe("Search", () => {
    test("Renders the Search component", () => {
        render(<Search />);
    })
});