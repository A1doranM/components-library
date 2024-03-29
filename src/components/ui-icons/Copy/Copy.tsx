import React from "react";

import CopyIcon from "../../../assets/images/ui-icons/copy.svg";

import "./copy.scss";

export interface CopyInterface {
  className?: string;
}

const Copy = ({ className = "" }: CopyInterface): JSX.Element => {
  return <img src={CopyIcon} alt="copy" className={className} />;
};

export default Copy;
