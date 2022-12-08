import React from "react";
import cn from "classnames";

import GrayDisabledEyeIcon from "../../../assets/images/ui-icons/gray-disabled-eye.svg";

import "./gray-disabled-eye.scss";

export interface GrayDisabledEyeInterface {
  className?: string;
}

const GrayDisabledEye = ({
  className = ""
}: GrayDisabledEyeInterface): JSX.Element => {
  return (
    <img
      src={GrayDisabledEyeIcon}
      alt="gray disabled eye"
      className={className}
    />
  );
};

export default GrayDisabledEye;
