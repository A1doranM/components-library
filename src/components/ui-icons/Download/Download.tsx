import React from "react";

import DownloadIcon from "../../../assets/images/ui-icons/download.svg";

import "./download.scss";

export interface DownloadInterface {
  className?: string;
}

const Download = ({ className = "" }: DownloadInterface): JSX.Element => {
  return <img src={DownloadIcon} alt="download" className={className} />;
};

export default Download;
