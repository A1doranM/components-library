import React from "react";
import cn from "classnames";

import RemoveIcon from "src/assets/images/ui-icons/remove.svg";

import "./remove.scss";

export interface RemoveInterface {
  className?: string;
}

const Remove = ({ className = "" }: RemoveInterface): JSX.Element => {
  return <img src={RemoveIcon} alt="long arrow" className={className} />;
};

export default Remove;
