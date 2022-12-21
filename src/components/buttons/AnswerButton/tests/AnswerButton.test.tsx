import React from "react";
import { render, screen } from "@testing-library/react";

import AnswerButton from "../AnswerButton";

import DoneIcon from "../../../../assets/images/icons/done.svg";
import CancelIcon from "../../../../assets/images/icons/cancel.svg";

describe("AnswerButton", () => {
  test("Renders the AnswerButton component", () => {
    render(<AnswerButton label="Correct" />);
    const button = screen.getByTestId("answer-button");
    const icon = screen.getByAltText("button icon") as HTMLImageElement;
    expect(button).toBeInTheDocument();
    expect(icon.src).toContain(DoneIcon);
    screen.debug();
  });

  test("Renders the AnswerButton component round", () => {
    render(<AnswerButton label="Correct" round={true} />);
    const button = screen.getByTestId("answer-button");
    const icon = screen.getByAltText("button icon") as HTMLImageElement;
    expect(button).toBeInTheDocument();
    expect(icon.src).toContain(DoneIcon);
    screen.debug();
  });

  test("Renders the AnswerButton component with cancel=true", () => {
    render(<AnswerButton label="Correct" cancel={true} />);
    const button = screen.getByTestId("answer-button");
    const icon = screen.getByAltText("button icon") as HTMLImageElement;
    expect(button).toBeInTheDocument();
    expect(icon.src).toContain(CancelIcon);
    screen.debug();
  });

  test("Renders the AnswerButton component with cancel=true round=true", () => {
    render(<AnswerButton label="Correct" cancel={true} round={true} />);
    const button = screen.getByTestId("answer-button");
    const icon = screen.getByAltText("button icon") as HTMLImageElement;
    expect(button).toBeInTheDocument();
    expect(icon.src).toContain(CancelIcon);
    screen.debug();
  });

  test("Renders the AnswerButton component with custom className='test-class'", () => {
    render(<AnswerButton label="Correct" className="test-class" />);
    const button = screen.getByTestId("answer-button");
    expect(button).toBeInTheDocument();
    expect(button.className).toContain("test-class");
    screen.debug();
  });
});
