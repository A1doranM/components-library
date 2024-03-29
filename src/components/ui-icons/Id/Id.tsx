import React from "react";

import IdIcon from "../../../assets/images/ui-icons/id.svg";

import "./id.scss";

export interface IdInterface {
  className?: string;
}

const Id = ({ className = "" }: IdInterface): JSX.Element => {
  return <img src={IdIcon} alt="id" className={className} />;
};

export default Id;
