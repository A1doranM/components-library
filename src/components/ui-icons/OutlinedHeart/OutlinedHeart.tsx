import React from "react";
import cn from "classnames";

import OutlinedHeartIcon from "src/assets/images/ui-icons/outlined-heart.svg";

import "./outlined-heart.scss";

export interface OutlinedHeartInterface {
  className?: string;
}

const OutlinedHeart = ({ className = "" }: OutlinedHeartInterface): JSX.Element => {
  return <img src={OutlinedHeartIcon} alt="outlined heart" className={className} />;
};

export default OutlinedHeart;
