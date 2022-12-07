import React from "react";
import cn from "classnames";

import MailIcon from "src/assets/images/ui-icons/mail.svg";

import "./mail.scss";

export interface MailInterface {
  className?: string;
}

const Mail = ({ className = "" }: MailInterface): JSX.Element => {
  return <img src={MailIcon} alt="mail" className={className} />;
};

export default Mail;