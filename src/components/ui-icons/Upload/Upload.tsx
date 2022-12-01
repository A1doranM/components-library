import React from "react";
import cn from "classnames";

import UploadIcon from "src/assets/images/ui-icons/upload.svg";

import "./upload.scss";

export interface UploadInterface {
  className?: string;
}

const Upload = ({ className = "" }: UploadInterface): JSX.Element => {
  return <img src={UploadIcon} alt="long arrow" className={className} />;
};

export default Upload;
