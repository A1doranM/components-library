import React from "react";
import cn from "classnames";

import AddIcon from "src/assets/images/ui-icons/add.svg";

import "./add.scss";

export interface AddInterface {
  className?: string;
}

const Add = ({ className = "" }: AddInterface): JSX.Element => {
  return <img src={AddIcon} alt="add" className={className} />;
};

export default Add;
