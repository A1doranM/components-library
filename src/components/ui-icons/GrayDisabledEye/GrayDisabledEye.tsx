import React from "react";
import cn from "classnames";

import GrayDisabledEyeIcon from "src/assets/images/ui-icons/gray-disabled-eye.svg";

import "./gray-disabled-eye.scss";

export interface GrayDisabledEyeInterface {
  className?: string;
}

const GrayDisabledEye = ({
  className = ""
}: GrayDisabledEyeInterface): JSX.Element => {
  return (
    <img src={GrayDisabledEyeIcon} alt="long arrow" className={className} />
  );
};

export default GrayDisabledEye;
