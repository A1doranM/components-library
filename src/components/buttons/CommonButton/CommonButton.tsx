import React from "react";
import cn from "classnames";

import "./common-button.scss";

export interface CommonButtonProps {
  label?: string;
  outlined?: boolean;
  disabled?: boolean;
  dashed?: boolean;
  className?: string;
  large?: boolean;
  image?: string;
  round?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CommonButton = (props: CommonButtonProps) => {
  return (
    <button
      className={cn("common-button", props.className, {
        ["common-button_outlined"]: props.outlined,
        ["common-button_dashed"]: props.dashed,
        ["common-button_filled"]: !props.outlined,
        ["common-button_disabled"]: props.disabled,
        ["common-button_large"]: props.large,
        ["common-button_round"]: props.round
      })}
      onClick={props.onClick}
    >
      {(props.image || props.round) && (
        <div className="common-button_image-container">
          <img
            src={props.image}
            className="common-button_image"
            alt="button icon"
          />
        </div>
      )}
      {!props.round && props.label}
    </button>
  );
};

export default CommonButton;
