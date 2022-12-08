import React from "react";

import MailIcon from "../../../assets/images/ui-icons/mail.svg";

import "./mail.scss";

export interface MailInterface {
  className?: string;
}

const Mail = ({ className = "" }: MailInterface): JSX.Element => {
  return <img src={MailIcon} alt="mail" className={className} />;
};

export default Mail;
