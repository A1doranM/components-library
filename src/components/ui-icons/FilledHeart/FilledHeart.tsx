import React from "react";
import cn from "classnames";

import FilledHeartIcon from "../../../assets/images/ui-icons/filled-heart.svg";

import "./filled-heart.scss";

export interface FilledHeartInterface {
  className?: string;
}

const FilledHeart = ({ className = "" }: FilledHeartInterface): JSX.Element => {
  return <img src={FilledHeartIcon} alt="filled heart" className={className} />;
};

export default FilledHeart;
