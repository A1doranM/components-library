import React from "react";
import { render } from "@testing-library/react";

import AnswerButton from "../AnswerButton";

describe("AnswerButton", () => {
  test("Renders the AnswerButton component", () => {
    render(<AnswerButton />);
  });
});
