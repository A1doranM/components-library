import React from "react";
import cn from "classnames";

import CloseIcon from "assets/images/ui-icons/close.svg";

import "./close.scss";

export interface CloseInterface {
  className?: string;
}

const Close = ({ className = "" }: CloseInterface): JSX.Element => {
  return <img src={CloseIcon} alt="close" className={className} />;
};

export default Close;
