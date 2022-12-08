import React from "react";
import cn from "classnames";

import HelpIcon from "assets/images/ui-icons/help.svg";

import "./help.scss";

export interface HelpInterface {
  className?: string;
}

const Help = ({ className = "" }: HelpInterface): JSX.Element => {
  return <img src={HelpIcon} alt="help" className={className} />;
};

export default Help;
