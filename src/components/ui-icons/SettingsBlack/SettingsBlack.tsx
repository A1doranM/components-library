import React from "react";
import cn from "classnames";

import SettingsBlackIcon from "src/assets/images/ui-icons/settings-black.svg";

import "./settings-black.scss";

export interface SettingsBlackInterface {
  className?: string;
}

const SettingsBlack = ({ className = "" }: SettingsBlackInterface): JSX.Element => {
  return <img src={SettingsBlackIcon} alt="settings black" className={className} />;
};

export default SettingsBlack;
