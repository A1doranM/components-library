import React from "react";
import { render } from "@testing-library/react";
import Attention from "../Attention";

describe("Expand", () => {
  test("Renders the ItemsPagination component", () => {
    render(
      <Attention title="Test" text="Text" date="2012-09-27" status="ACCEPTED" />
    );
  });
});
