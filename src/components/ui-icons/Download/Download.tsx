import React from "react";
import cn from "classnames";

import DownloadIcon from "src/assets/images/ui-icons/download.svg";

import "./download.scss";

export interface DownloadInterface {
  className?: string;
}

const Download = ({ className = "" }: DownloadInterface): JSX.Element => {
  return <img src={DownloadIcon} alt="long arrow" className={className} />;
};

export default Download;
