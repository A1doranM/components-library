import React from "react";
import cn from "classnames";

import GrnIcon from "../../../assets/images/ui-icons/grn.svg";

import "./grn.scss";

export interface GrnInterface {
  className?: string;
}

const Grn = ({ className = "" }: GrnInterface): JSX.Element => {
  return <img src={GrnIcon} alt="UAH" className={className} />;
};

export default Grn;
