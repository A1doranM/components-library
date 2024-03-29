import React from "react";

import PlusIcon from "../../../assets/images/ui-icons/plus.svg";

import "./plus.scss";

export interface PlusInterface {
  className?: string;
}

const Plus = ({ className = "" }: PlusInterface): JSX.Element => {
  return <img src={PlusIcon} alt="plus" className={className} />;
};

export default Plus;
