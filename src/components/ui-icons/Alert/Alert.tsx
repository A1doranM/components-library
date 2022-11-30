import React from "react";
import cn from "classnames";

import AlertIcon from "src/assets/images/ui-icons/alert.svg";

import "./alert.scss";

export interface AlertInterface {
  className?: string;
}

const Alert = ({ className = "" }: AlertInterface): JSX.Element => {
  return <img src={AlertIcon} alt="long arrow" className={className} />;
};

export default Alert;
