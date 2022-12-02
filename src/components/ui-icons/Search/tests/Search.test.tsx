import React from "react";
import { render, screen } from "@testing-library/react";

import Search from "../Search";

describe("Search", () => {
  test("Renders the Search component", () => {
    render(<Search />);
    const searchIcon = screen.getByAltText("search") as HTMLImageElement;
    expect(searchIcon.src).toContain("search");
  });
});
