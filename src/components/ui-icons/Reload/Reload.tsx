import React from "react";
import cn from "classnames";

import ReloadIcon from "../../../assets/images/ui-icons/reload.svg";

import "./reload.scss";

export interface ReloadInterface {
  className?: string;
}

const Reload = ({ className = "" }: ReloadInterface): JSX.Element => {
  return <img src={ReloadIcon} alt="reload" className={className} />;
};

export default Reload;
