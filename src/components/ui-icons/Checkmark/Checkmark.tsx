import React from "react";

import CheckmarkIcon from "../../../assets/images/ui-icons/checkmark.svg";

import "./checkmark.scss";

export interface CheckmarkInterface {
  className?: string;
}

const Checkmark = ({ className = "" }: CheckmarkInterface): JSX.Element => {
  return <img src={CheckmarkIcon} alt="checkmark" className={className} />;
};

export default Checkmark;
