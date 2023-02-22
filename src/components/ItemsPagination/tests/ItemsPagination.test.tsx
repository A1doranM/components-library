import React from "react";
import { render } from "@testing-library/react";

import ItemsPagination from "../ItemsPagination";
import { BrowserRouter } from "react-router-dom";

const ArrayOfElements = [
  {
    id: 0,
    element: <h4>Hello world</h4>
  },
  {
    id: 1,
    element: <h4>Hello world</h4>
  },
  {
    id: 2,
    element: <h4>Hello world</h4>
  },
  {
    id: 3,
    element: <h4>Hello world</h4>
  },
  {
    id: 4,
    element: <h4>Hello world</h4>
  },
  {
    id: 5,
    element: <h4>Hello world</h4>
  },
  {
    id: 6,
    element: <h4>Hello world</h4>
  },
  {
    id: 7,
    element: <h4>Hello world</h4>
  },
  {
    id: 8,
    element: <h4>Hello world</h4>
  },
  {
    id: 9,
    element: <h4>Hello world</h4>
  },
  {
    id: 10,
    element: <h4>Hello world</h4>
  }
];

describe("ItemsPagination", () => {
  test("Renders the ItemsPagination component", () => {
    render(
      <BrowserRouter>
        <ItemsPagination itemsPerPage={10} elements={ArrayOfElements} />
      </BrowserRouter>
    );
  });
});
