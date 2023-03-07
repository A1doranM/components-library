import React from "react";
import cn from "classnames";

import "./icon-button.scss";


export interface IconButtonInterface {
  children?: any | undefined;
  icon: any;
  className?: string;
  classNameIcon?: string;
  alt?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLButtonElement>) => void;
}

const IconButton = ({
                      children = undefined,
                      icon,
                      className = "",
                      classNameIcon = "",
                      alt = "",
                      onClick
                    }: IconButtonInterface): JSX.Element => {
  return (
    <button className={cn("icon-button", className)} onClick={onClick}>
      <img src={icon} alt={alt} className={cn("icon-button__icon", classNameIcon)} />
      {children}
    </button>
  );
};

export default IconButton;
