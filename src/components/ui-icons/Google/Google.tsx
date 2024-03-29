import React from "react";

import GoogleIcon from "../../../assets/images/ui-icons/google.svg";

import "./google.scss";

export interface GoogleInterface {
  className?: string;
}

const Google = ({ className = "" }: GoogleInterface): JSX.Element => {
  return <img src={GoogleIcon} alt="google" className={className} />;
};

export default Google;
