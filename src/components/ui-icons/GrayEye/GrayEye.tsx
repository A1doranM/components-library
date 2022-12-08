import React from "react";

import GrayEyeIcon from "../../../assets/images/ui-icons/gray-eye.svg";

import "./gray-eye.scss";

export interface GrayEyeInterface {
  className?: string;
}

const GrayEye = ({ className = "" }: GrayEyeInterface): JSX.Element => {
  return <img src={GrayEyeIcon} alt="gray eye" className={className} />;
};

export default GrayEye;
