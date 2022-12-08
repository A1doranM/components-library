import React from "react";

import ShortFilledArrowIcon from "../../../assets/images/ui-icons/short-filled-arrow.svg";

import "./short-filled-arrow.scss";

export interface ShortFilledArrowInterface {
  className?: string;
}

const ShortFilledArrow = ({
  className = ""
}: ShortFilledArrowInterface): JSX.Element => {
  return (
    <img
      src={ShortFilledArrowIcon}
      alt="short filled arrow"
      className={className}
    />
  );
};

export default ShortFilledArrow;
