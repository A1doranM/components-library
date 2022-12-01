import React from "react";
import cn from "classnames";

import ShortFilledArrowIcon from "src/assets/images/ui-icons/short-filled-arrow.svg";

import "./short-filled-arrow.scss";

export interface ShortFilledArrowInterface {
  className?: string;
}

const ShortFilledArrow = ({ className = "" }: ShortFilledArrowInterface): JSX.Element => {
  return <img src={ShortFilledArrowIcon} alt="long arrow" className={className} />;
};

export default ShortFilledArrow;
