import React from "react";
import cn from "classnames";

import "./answer-button.scss";

export interface AnswerButtonProps {
  label?: string;
  cancel?: boolean;
  className?: string;
  round?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  selected?: boolean;
}

const AnswerButton = ({
                        label,
                        cancel,
                        className,
                        round,
                        onClick,
                        selected
                      }: AnswerButtonProps) => {
  return (
    <button
      data-testid="answer-button"
      className={cn("answer-button", className, {
        ["answer-button_cancel"]: cancel,
        ["answer-button_round"]: round,
        ["answer-button__selected"]: selected
      })}
      onClick={onClick}
    >
      <div className="answer-button_image-container" />

      <span>{!round && label}</span>
    </button>
  );
};

export default AnswerButton;
