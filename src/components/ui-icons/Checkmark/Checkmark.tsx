import React from "react";
import cn from "classnames";

import CheckmarkIcon from "src/assets/images/ui-icons/checkmark.svg";

import "./checkmark.scss";

export interface CheckmarkInterface {
  className?: string;
}

const Checkmark = ({ className = "" }: CheckmarkInterface): JSX.Element => {
  return <img src={CheckmarkIcon} alt="long arrow" className={className} />;
};

export default Checkmark;
