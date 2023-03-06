import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import IconButton from "../IconButton";

import CloseIcon from "assets/images/icons/cancel.svg";

describe("IconButton", () => {
  test("Renders the IconButton component", () => {
    render(<IconButton icon={CloseIcon} />);
    screen.debug();
  });
});
