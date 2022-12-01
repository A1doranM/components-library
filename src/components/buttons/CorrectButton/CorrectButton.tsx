import React from "react";
import cn from "classnames";

import DoneIcon from "src/assets/images/icons/done.svg";
import CancelIcon from "src/assets/images/icons/cancel.svg";
import DoneOnHoldIcon from "src/assets/images/icons/done-white.svg";
import CancelOnHoldIcon from "src/assets/images/icons/cancel-white.svg";

import "./correct-button.scss";

export interface CorrectButtonProps {
  label?: string;
  cancel?: boolean;
  className?: string;
  round?: boolean;
  onHold?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CorrectButton = ({
  label,
  cancel,
  className,
  round,
  onHold,
  onClick
}: CorrectButtonProps) => {
  return (
    <button
      className={cn("correct-button", className, {
        ["correct-button_cancel"]: cancel,
        ["correct-button_round"]: round,
        ["correct-button_on-hold"]: onHold
      })}
      onClick={onClick}
    >
      <div className="correct-button_image-container">
        <img
          src={
            cancel
              ? !onHold
                ? CancelIcon
                : CancelOnHoldIcon
              : !onHold
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

export default CorrectButton;
