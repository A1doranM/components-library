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

const CommonButton = ({
  label,
  outlined,
  disabled,
  dashed,
  className,
  large,
  image,
  round,
  onClick
}: CommonButtonProps) => {
  return (
    <button
      className={cn("common-button", className, {
        ["common-button_outlined"]: outlined,
        ["common-button_dashed"]: dashed,
        ["common-button_filled"]: !outlined,
        ["common-button_disabled"]: disabled,
        ["common-button_large"]: large,
        ["common-button_round"]: round
      })}
      onClick={onClick}
    >
      {(image || round) && (
        <div className="common-button_image-container">
          <img
            src={image}
            className="common-button_image"
            alt="button icon"
          />
        </div>
      )}
      {!round && label}
    </button>
  );
};

export default CommonButton;
