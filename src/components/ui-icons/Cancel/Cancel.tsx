import React from "react";
import cn from "classnames";

import CancelIcon from "src/assets/images/ui-icons/cancel.svg";

import "./cancel.scss";

export interface CancelInterface {
  className?: string;
}

const Cancel = ({ className = "" }: CancelInterface): JSX.Element => {
  return <img src={CancelIcon} alt="long arrow" className={className} />;
};

export default Cancel;
