import React from "react";
import cn from "classnames";

import LockIcon from "assets/images/ui-icons/lock.svg";

import "./lock.scss";

export interface LockInterface {
  className?: string;
}

const Lock = ({ className = "" }: LockInterface): JSX.Element => {
  return <img src={LockIcon} alt="lock" className={className} />;
};

export default Lock;
