import React from "react";
import cn from "classnames";

import SettingsGrayIcon from "src/assets/images/ui-icons/settings-gray.svg";

import "./settings-gray.scss";

export interface SettingsGrayInterface {
  className?: string;
}

const SettingsGray = ({ className = "" }: SettingsGrayInterface): JSX.Element => {
  return <img src={SettingsGrayIcon} alt="settings gray" className={className} />;
};

export default SettingsGray;