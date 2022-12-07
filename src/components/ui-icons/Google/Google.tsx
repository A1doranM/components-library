import React from "react";
import cn from "classnames";

import GoogleIcon from "src/assets/images/ui-icons/google.svg";

import "./google.scss";

export interface GoogleInterface {
  className?: string;
}

const Google = ({
  className = ""
}: GoogleInterface): JSX.Element => {
  return <img src={GoogleIcon} alt="google" className={className} />;
};

export default Google;
