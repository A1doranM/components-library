import React from "react";
import cn from "classnames";

import LongArrowIcon from 'src/assets/images/ui-icons/long-arrow.svg'

import "./title.scss";

export interface LongArrowInterface {
  size?: 10 | 12 | 14 | 16 | 20 | 24 | 32 | 36 | 48;
  weight?: number;
  className?: string;
  children?: any;
}

const LongArrow = ({
  size = 16,
  weight = 400,
  className = "",
  children
}: LongArrowInterface): JSX.Element => {
  return (
   <img src={LongArrowIcon} alt="long arrow"/>
  );
};

export default LongArrow;
