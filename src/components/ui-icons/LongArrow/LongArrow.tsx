import React from "react";
import cn from "classnames";

import LongArrowIcon from "../../../assets/images/ui-icons/long-arrow.svg";

import "./long-arrow.scss";

export interface LongArrowInterface {
  className?: string;
}

const LongArrow = ({ className = "" }: LongArrowInterface): JSX.Element => {
  return <img src={LongArrowIcon} alt="long arrow" className={className} />;
};

export default LongArrow;
