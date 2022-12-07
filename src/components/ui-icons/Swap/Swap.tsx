import React from "react";
import cn from "classnames";

import SwapIcon from "src/assets/images/ui-icons/swap.svg";

import "./swap.scss";

export interface SwapInterface {
  className?: string;
}

const Swap = ({ className = "" }: SwapInterface): JSX.Element => {
  return <img src={SwapIcon} alt="swap" className={className} />;
};

export default Swap;
