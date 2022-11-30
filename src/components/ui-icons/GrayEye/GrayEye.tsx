import React from "react";
import cn from "classnames";

import GrayEyeIcon from "src/assets/images/ui-icons/gray-eye.svg";

import "./gray-eye.scss";

export interface GrayEyeInterface {
  className?: string;
}

const GrayEye = ({
  className = ""
}: GrayEyeInterface): JSX.Element => {
  return (
    <img src={GrayEyeIcon} alt="long arrow" className={className} />
  );
};

export default GrayEye;
