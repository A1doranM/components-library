import React from "react";

import SwapIcon from "../../../assets/images/ui-icons/swap.svg";

import "./swap.scss";

export interface SwapInterface {
  className?: string;
}

const Swap = ({ className = "" }: SwapInterface): JSX.Element => {
  return <img src={SwapIcon} alt="swap" className={className} />;
};

export default Swap;
