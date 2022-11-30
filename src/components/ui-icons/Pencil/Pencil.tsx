import React from "react";
import cn from "classnames";

import PencilIcon from "src/assets/images/ui-icons/pencil.svg";

import "./pencil.scss";

export interface PencilInterface {
  className?: string;
}

const Pencil = ({ className = "" }: PencilInterface): JSX.Element => {
  return <img src={PencilIcon} alt="long arrow" className={className} />;
};

export default Pencil;
