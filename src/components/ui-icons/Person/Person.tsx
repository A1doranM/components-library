import React from "react";

import PersonIcon from "../../../assets/images/ui-icons/person.svg";

import "./person.scss";

export interface PersonInterface {
  className?: string;
}

const Person = ({ className = "" }: PersonInterface): JSX.Element => {
  return <img src={PersonIcon} alt="person" className={className} />;
};

export default Person;
