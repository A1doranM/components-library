import React from "react";
import cn from "classnames";

import ShortArrowIcon from "assets/images/ui-icons/short-arrow.svg";

import "./short-arrow.scss";

export interface ShortArrowInterface {
  className?: string;
}

const ShortArrow = ({ className = "" }: ShortArrowInterface): JSX.Element => {
  return <img src={ShortArrowIcon} alt="short arrow" className={className} />;
};

export default ShortArrow;
