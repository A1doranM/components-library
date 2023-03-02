import React, { useState } from "react";
import cn from "classnames";

import CancelIcon from "../../assets/images/icons/cancel.svg";
import FingerTopIcon from "../../assets/images/icons/finger-top.svg";

import "./alert.scss";

export interface AlertInterface {
  type: "success" | "error" | "warning";
  children?: any;
  withIcon?: boolean;
  closable?: boolean;
  className?: string;
  onClose?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Alert = ({
  children,
  type,
  withIcon,
  closable,
  className,
  onClose
}: AlertInterface): JSX.Element => {
  const [close, setClose] = useState(false);

  const handleClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setClose(true);

    onClose && onClose(e);
  };

  return (
    <div
      className={cn(
        "alert",
        {
          ["alert_success"]: type === "success",
          ["alert_error"]: type === "error",
          ["alert_warning"]: type === "warning",
          ["closed"]: close
        },
        className
      )}
    >
      {withIcon && (
        <img src={FingerTopIcon} alt="alert icon" className="alert-icon" />
      )}
      <div>{children}</div>
      {closable && (
        <button className="alert_close-btn" onClick={handleClose}>
          <img src={CancelIcon} alt="close" />
        </button>
      )}
    </div>
  );
};

export default Alert;
