import React from "react";
import cn from "classnames";

import DoubleArrowIcon from "src/assets/images/ui-icons/double-arrow.svg";

import "./double-arrow.scss";

export interface DoubleArrowInterface {
  className?: string;
}

const DoubleArrow = ({ className = "" }: DoubleArrowInterface): JSX.Element => {
  return <img src={DoubleArrowIcon} alt="long arrow" className={className} />;
};

export default DoubleArrow;
