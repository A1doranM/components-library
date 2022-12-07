import React from "react";
import { render, screen } from "@testing-library/react";

import Person from "../Person";

describe("Person", () => {
  test("Renders the Person component", () => {
    render(<Person />);
    const personIcon = screen.getByAltText("person") as HTMLImageElement;
    expect(personIcon.src).toContain("person");
  });
});
