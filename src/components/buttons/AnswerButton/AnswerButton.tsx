import React from "react";
import cn from "classnames";

import DoneIcon from "assets/images/icons/done.svg";
import CancelIcon from "assets/images/icons/cancel.svg";
import DoneOnHoldIcon from "assets/images/icons/done-white.svg";
import CancelOnHoldIcon from "assets/images/icons/cancel-white.svg";

import "./correct-button.scss";

export interface AnswerButtonProps {
  label?: string;
  cancel?: boolean;
  className?: string;
  round?: boolean;
  hold?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const AnswerButton = ({
  label,
  cancel,
  className,
  round,
  hold,
  onClick
}: AnswerButtonProps) => {
  return (
    <button
      className={cn("correct-button", className, {
        ["correct-button_cancel"]: cancel,
        ["correct-button_round"]: round,
        ["correct-button_on-hold"]: hold
      })}
      onClick={onClick}
    >
      <div className="correct-button_image-container">
        <img
          src={
            cancel
              ? !hold
                ? CancelIcon
                : CancelOnHoldIcon
              : !hold
              ? DoneIcon
              : DoneOnHoldIcon
          }
          className="correct-button_image"
          alt="button icon"
        />
      </div>
      {!round && label}
    </button>
  );
};

export default AnswerButton;
