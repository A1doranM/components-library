import React from "react";
import { render, screen } from "@testing-library/react";

import AnswerButton from "../AnswerButton";

describe("AnswerButton", () => {
  test("Renders the AnswerButton component", () => {
    render(<AnswerButton label="Correct" />);
    screen.debug();
  });

  test("Renders the AnswerButton component round", () => {
    render(<AnswerButton label="Correct" round={true} />);
    screen.debug();
  });

  test("Renders the AnswerButton component with cancel=true", () => {
    render(<AnswerButton label="Correct" cancel={true} />);
    screen.debug();
  });

  test("Renders the AnswerButton component with cancel=true round=true", () => {
    render(<AnswerButton label="Correct" cancel={true} round={true} />);
  });

  test("Renders the AnswerButton component with custom className='test-class'", () => {
    render(<AnswerButton label="Correct" className="test-class" />);
    const button = screen.getByTestId("answer-button");
    expect(button).toBeInTheDocument();
    expect(button.className).toContain("test-class");
    screen.debug();
  });
});
