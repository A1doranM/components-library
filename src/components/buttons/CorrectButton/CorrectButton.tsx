import React from "react";
import cn from "classnames";

import DoneIcon from "assets/images/icons/done.svg";
import CancelIcon from "assets/images/icons/cancel.svg";
import DoneOnHoldIcon from "assets/images/icons/done-white.svg";
import CancelOnHoldIcon from "assets/images/icons/cancel-white.svg";

import "./correct-button.scss";

export interface CorrectButtonProps {
  label?: string;
  cancel?: boolean;
  className?: string;
  round?: boolean;
  onHold?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CorrectButton = (props: CorrectButtonProps) => {
  return (
    <button
      className={cn("correct-button", props.className, {
        ["correct-button_cancel"]: props.cancel,
        ["correct-button_round"]: props.round,
        ["correct-button_on-hold"]: props.onHold
      })}
      onClick={props.onClick}
    >
      <div className="correct-button_image-container">
        <img
          src={
            props.cancel
              ? !props.onHold
                ? CancelIcon
                : CancelOnHoldIcon
              : !props.onHold
              ? DoneIcon
              : DoneOnHoldIcon
          }
          className="correct-button_image"
          alt="button icon"
        />
      </div>
      {!props.round && props.label}
    </button>
  );
};

export default CorrectButton;
