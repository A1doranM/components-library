import React from "react";
import cn from "classnames";

import TrashOutlinedIcon from "assets/images/ui-icons/trash-outlined.svg";

import "./trash-outlined.scss";

export interface TrashOutlinedInterface {
  className?: string;
}

const TrashOutlined = ({
  className = ""
}: TrashOutlinedInterface): JSX.Element => {
  return <img src={TrashOutlinedIcon} alt="trash outlined" className={className} />;
};

export default TrashOutlined;
