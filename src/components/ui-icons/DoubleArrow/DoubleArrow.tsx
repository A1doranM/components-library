import React from "react";
import cn from "classnames";

import DoubleArrowIcon from "assets/images/ui-icons/double-arrow.svg";

import "./double-arrow.scss";

export interface DoubleArrowInterface {
  className?: string;
}

const DoubleArrow = ({ className = "" }: DoubleArrowInterface): JSX.Element => {
  return <img src={DoubleArrowIcon} alt="double arrow" className={className} />;
};

export default DoubleArrow;
