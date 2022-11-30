import React from "react";
import cn from "classnames";

import LockIcon from "src/assets/images/ui-icons/lock.svg";

import "./lock.scss";

export interface LockInterface {
  className?: string;
}

const Lock = ({ className = "" }: LockInterface): JSX.Element => {
  return <img src={LockIcon} alt="long arrow" className={className} />;
};

export default Lock;
