import React from "react";

import CancelCertificateIcon from "../../../assets/images/ui-icons/cancel-certificate.svg";

import "./cancel-certificate.scss";

export interface CancelCertificateInterface {
  className?: string;
}

const CancelCertificate = ({
  className = ""
}: CancelCertificateInterface): JSX.Element => {
  return (
    <img
      src={CancelCertificateIcon}
      alt="cancel certificate"
      className={className}
    />
  );
};

export default CancelCertificate;
