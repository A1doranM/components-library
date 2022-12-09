import React from "react";

import PlaneIcon from "../../../assets/images/ui-icons/plane.svg";

import "./plane.scss";

export interface PlaneInterface {
  className?: string;
}

const Plane = ({ className = "" }: PlaneInterface): JSX.Element => {
  return <img src={PlaneIcon} alt="plane" className={className} />;
};

export default Plane;
