import React from "react";
import { render } from "@testing-library/react";

import Navigation from "../Navigation";

const navigationLinks = [
  {
    text: "Зверніть увагу",
    to: "/personal/attention"
  },
  {
    text: "Чернетки",
    to: "/personal/drafts"
  },
  {
    text: "Замовлені",
    to: "/personal/ordered"
  },
  {
    text: "Отримані",
    to: "/personal/received"
  },
  {
    text: "Відмовлені",
    to: "/personal/canceled"
  },
  {
    text: "Анульовані",
    to: "/personal/annul"
  }
];

describe("Navigation", () => {
  test("Renders the Navigation component", () => {
    render(<Navigation navLinks={navigationLinks} />);
  });
});
