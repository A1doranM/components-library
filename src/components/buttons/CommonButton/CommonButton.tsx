import React from "react";
import cn from "classnames";

import "./CommonButton.scss";

export interface CommonButtonProps {
  label?: string;
  outlined?: boolean;
  disabled?: boolean;
  dashed?: boolean;
  className?: string;
  large?: boolean;
  image?: string;
  round?: boolean;
}

const CommonButton = (props: CommonButtonProps) => {
  return (
    <button
      className={cn("button", props.className, {
        ["button_outlined"]: props.outlined,
        ["button_dashed"]: props.dashed,
        ["button_filled"]: !props.outlined,
        ["button_disabled"]: props.disabled,
        ["button_large"]: props.large,
        ["button_round"]: props.round
      })}
    >
      {(props.image || props.round) && (
        <div className="button_image-container">
          <img src={props.image} className="button_image" alt="button icon" />
        </div>
      )}
      {!props.round && props.label}
    </button>
  );
};

export default CommonButton;
