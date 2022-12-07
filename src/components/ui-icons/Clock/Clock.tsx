import React from "react";
import cn from "classnames";

import ClockIcon from "src/assets/images/ui-icons/clock.svg";

import "./clock.scss";

export interface ClockInterface {
  className?: string;
}

const Clock = ({ className = "" }: ClockInterface): JSX.Element => {
  return <img src={ClockIcon} alt="clock" className={className} />;
};

export default Clock;
