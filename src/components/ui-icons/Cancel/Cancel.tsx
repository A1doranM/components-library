import React from "react";

import CancelIcon from "../../../assets/images/ui-icons/cancel.svg";

import "./cancel.scss";

export interface CancelInterface {
  className?: string;
}

const Cancel = ({ className = "" }: CancelInterface): JSX.Element => {
  return <img src={CancelIcon} alt="cancel" className={className} />;
};

export default Cancel;
