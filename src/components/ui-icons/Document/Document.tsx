import React from "react";
import cn from "classnames";

import DocumentIcon from "src/assets/images/ui-icons/document.svg";

import "./document.scss";

export interface DocumentInterface {
  className?: string;
}

const Document = ({ className = "" }: DocumentInterface): JSX.Element => {
  return <img src={DocumentIcon} alt="long arrow" className={className} />;
};

export default Document;
