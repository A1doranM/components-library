import React from "react";

import BlackEyeIcon from "../../../assets/images/ui-icons/black-eye.svg";

import "./black-eye.scss";

export interface BlackEyeInterface {
  className?: string;
}

const BlackEye = ({ className = "" }: BlackEyeInterface): JSX.Element => {
  return <img src={BlackEyeIcon} alt="black eye" className={className} />;
};

export default BlackEye;
