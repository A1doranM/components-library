import React from "react";

import LocationIcon from "../../../assets/images/ui-icons/location.svg";

import "./location.scss";

export interface LocationInterface {
  className?: string;
}

const Location = ({ className = "" }: LocationInterface): JSX.Element => {
  return <img src={LocationIcon} alt="location" className={className} />;
};

export default Location;
