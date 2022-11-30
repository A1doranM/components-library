import React from "react";
import cn from "classnames";

import GrnIcon from "src/assets/images/ui-icons/grn.svg";

import "./grn.scss";

export interface GrnInterface {
  className?: string;
}

const Grn = ({ className = "" }: GrnInterface): JSX.Element => {
  return <img src={GrnIcon} alt="long arrow" className={className} />;
};

export default Grn;
