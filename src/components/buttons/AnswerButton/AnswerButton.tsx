import React from "react";
import cn from "classnames";

import "./correct-button.scss";

export interface AnswerButtonProps {
  label?: string;
  cancel?: boolean;
  className?: string;
  round?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const AnswerButton = ({
  label,
  cancel,
  className,
  round,
  onClick
}: AnswerButtonProps) => {
  return (
    <button
      data-testid="answer-button"
      className={cn("correct-button", className, {
        ["correct-button_cancel"]: cancel,
        ["correct-button_round"]: round
      })}
      onClick={onClick}
    >
      <div className="correct-button_image-container" />

      <span>{!round && label}</span>
    </button>
  );
};

export default AnswerButton;
