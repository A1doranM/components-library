import React from "react";
import cn from "classnames";

import ShortArrowIcon from "src/assets/images/ui-icons/short-arrow.svg";

import "./short-arrow.scss";

export interface ShortArrowInterface {
  className?: string;
}

const ShortArrow = ({ className = "" }: ShortArrowInterface): JSX.Element => {
  return <img src={ShortArrowIcon} alt="long arrow" className={className} />;
};

export default ShortArrow;
