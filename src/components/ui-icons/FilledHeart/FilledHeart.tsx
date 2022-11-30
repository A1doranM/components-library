import React from "react";
import cn from "classnames";

import FilledHeartIcon from "src/assets/images/ui-icons/filled-heart.svg";

import "./filled-heart.scss";

export interface FilledHeartInterface {
  className?: string;
}

const FilledHeart = ({ className = "" }: FilledHeartInterface): JSX.Element => {
  return <img src={FilledHeartIcon} alt="long arrow" className={className} />;
};

export default FilledHeart;
