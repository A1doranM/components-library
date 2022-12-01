import React from "react";
import cn from "classnames";

import AddCircleIcon from "src/assets/images/ui-icons/add-circle.svg";

import "./add-circle.scss";

export interface AddCircleInterface {
  className?: string;
}

const AddCircle = ({ className = "" }: AddCircleInterface): JSX.Element => {
  return <img src={AddCircleIcon} alt="long arrow" className={className} />;
};

export default AddCircle;
