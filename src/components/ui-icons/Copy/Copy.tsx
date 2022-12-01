import React from "react";
import cn from "classnames";

import CopyIcon from "src/assets/images/ui-icons/copy.svg";

import "./copy.scss";

export interface CopyInterface {
  className?: string;
}

const Copy = ({ className = "" }: CopyInterface): JSX.Element => {
  return <img src={CopyIcon} alt="long arrow" className={className} />;
};

export default Copy;
