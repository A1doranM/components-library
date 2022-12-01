import React from "react";
import { render } from "@testing-library/react";

import Title from "../Title";

describe("Title", () => {
    test("Renders the Title component", () => {
        render(<Title size={20}/>);
    })
});