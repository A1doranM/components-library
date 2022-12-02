import React from "react";
import cn from "classnames";

import PlusIcon from "src/assets/images/ui-icons/plus.svg";

import "./plus.scss";

export interface PlusInterface {
  className?: string;
}

const Plus = ({ className = "" }: PlusInterface): JSX.Element => {
  return <img src={PlusIcon} alt="plus" className={className} />;
};

export default Plus;
