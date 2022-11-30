import React from "react";
import cn from "classnames";

import PrintIcon from "src/assets/images/ui-icons/print.svg";

import "./print.scss";

export interface PrintInterface {
  className?: string;
}

const Print = ({ className = "" }: PrintInterface): JSX.Element => {
  return <img src={PrintIcon} alt="long arrow" className={className} />;
};

export default Print;
