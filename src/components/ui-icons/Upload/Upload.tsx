import React from "react";
import cn from "classnames";

import UploadIcon from "../../../assets/images/ui-icons/upload.svg";

import "./upload.scss";

export interface UploadInterface {
  className?: string;
}

const Upload = ({ className = "" }: UploadInterface): JSX.Element => {
  return <img src={UploadIcon} alt="upload" className={className} />;
};

export default Upload;
