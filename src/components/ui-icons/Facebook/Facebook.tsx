import React from "react";
import cn from "classnames";

import FacebookIcon from "../../../assets/images/ui-icons/facebook.svg";

import "./facebook.scss";

export interface FacebookInterface {
  className?: string;
}

const Facebook = ({ className = "" }: FacebookInterface): JSX.Element => {
  return <img src={FacebookIcon} alt="facebook" className={className} />;
};

export default Facebook;
