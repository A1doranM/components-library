import React from "react";

import AddCircleIcon from "../../../assets/images/ui-icons/add-circle.svg";

import "./add-circle.scss";

export interface AddCircleInterface {
  className?: string;
}

const AddCircle = ({ className = "" }: AddCircleInterface): JSX.Element => {
  return <img src={AddCircleIcon} alt="add circle" className={className} />;
};

export default AddCircle;
