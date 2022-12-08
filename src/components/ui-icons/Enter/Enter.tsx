import React from "react";
import cn from "classnames";

import EnterIcon from "assets/images/ui-icons/enter.svg";

import "./enter.scss";

export interface EnterInterface {
  className?: string;
}

const Enter = ({ className = "" }: EnterInterface): JSX.Element => {
  return <img src={EnterIcon} alt="enter" className={className} />;
};

export default Enter;
