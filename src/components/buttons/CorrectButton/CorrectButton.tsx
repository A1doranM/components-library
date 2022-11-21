import React from "react";
import cn from "classnames";

import "./CorrectButton.scss";

export interface CorrectButtonProps {
  label: string;
  outlined?: boolean;
  disabled?: boolean;
  dashed?: boolean;
  className?: string;
  large?: boolean;
  image?: string;
}

const CorrectButton = (props: CorrectButtonProps) => {
  return (
    <button
      className={cn("button", props.className, {
        ["button_outlined"]: props.outlined,
        ["button_dashed"]: props.dashed,
        ["button_filled"]: !props.outlined,
        ["button_disabled"]: props.disabled,
        ["button_large"]: props.large
      })}
    >
      {props.image && (
        <div className="button_image-container">
          <img src={props.image} className="button_image" alt="button icon" />
        </div>
      )}
      {props.label}
    </button>
  );
};

export default CorrectButton;
