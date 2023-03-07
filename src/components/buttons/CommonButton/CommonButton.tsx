import React from "react";
import cn from "classnames";

import "./common-button.scss";

export interface CommonButtonProps {
  type?: "submit" | "reset" | "button" | undefined;
  label?: any;
  outlined?: boolean;
  disabled?: boolean;
  dashed?: boolean;
  className?: string;
  large?: boolean;
  image?: any;
  alt?: string;
  round?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const CommonButton = ({
                        type = "button",
                        label,
                        outlined,
                        disabled,
                        dashed,
                        className,
                        large,
                        image,
                        alt,
                        round,
                        onClick
                      }: CommonButtonProps) => {
  return (
    <button
      data-testid="common-button"
      className={cn("common-button", className, {
        ["common-button_outlined"]: outlined,
        ["common-button_dashed"]: dashed,
        ["common-button_filled"]: !outlined,
        ["common-button_disabled"]: disabled,
        ["common-button_large"]: large,
        ["common-button_round"]: round
      })}
      onClick={onClick}
      type={type}
    >
      {(image || round) && (
        <div className="common-button_image-container">
          {typeof image === "string" ? (
            <img src={image} className="common-button_image" alt={alt} />
          ) : (
            image
          )}
        </div>
      )}
      {label}
    </button>
  );
};

export default CommonButton;
