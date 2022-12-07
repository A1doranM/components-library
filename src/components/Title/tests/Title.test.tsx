import React from "react";
import { render, screen } from "@testing-library/react";

import Title from "../Title";

describe("Title", () => {
  test("Renders the Title component", () => {
    render(<Title size={20}>Test</Title>);
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
  });
});
