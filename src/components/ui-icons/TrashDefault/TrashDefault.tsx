import React from "react";
import cn from "classnames";

import TrashDefaultIcon from "src/assets/images/ui-icons/trash-default.svg";

import "./trash-default.scss";

export interface TrashDefaultInterface {
  className?: string;
}

const TrashDefault = ({
  className = ""
}: TrashDefaultInterface): JSX.Element => {
  return <img src={TrashDefaultIcon} alt="trash default" className={className} />;
};

export default TrashDefault;