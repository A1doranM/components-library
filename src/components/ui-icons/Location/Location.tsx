import React from "react";
import cn from "classnames";

import LocationIcon from "src/assets/images/ui-icons/location.svg";

import "./location.scss";

export interface LocationInterface {
  className?: string;
}

const Location = ({ className = "" }:LocationInterface): JSX.Element => {
  return <img src={LocationIcon} alt="location" className={className} />;
};

export default Location;
