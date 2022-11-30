import React from "react";
import cn from "classnames";

import CancelCertificateIcon from "src/assets/images/ui-icons/cancel-certificate.svg";

import "./cancel-certificate.scss";

export interface CancelCertificateInterface {
  className?: string;
}

const CancelCertificate = ({ className = "" }: CancelCertificateInterface): JSX.Element => {
  return <img src={CancelCertificateIcon} alt="long arrow" className={className} />;
};

export default CancelCertificate;
