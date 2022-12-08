import React from "react";

import RemoveIcon from "../../../assets/images/ui-icons/remove.svg";

import "./remove.scss";

export interface RemoveInterface {
  className?: string;
}

const Remove = ({ className = "" }: RemoveInterface): JSX.Element => {
  return <img src={RemoveIcon} alt="remove" className={className} />;
};

export default Remove;
