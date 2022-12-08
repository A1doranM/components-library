import React from "react";
import cn from "classnames";

import CancelIcon from "../../assets/images/icons/cancel.svg";
import FingerTopIcon from "../../assets/images/icons/finger-top.svg";

import "./notification.scss";

export interface NotificationInterface {
  text: string;
  className?: string;
  withButton?: boolean;
}

const Reminder = ({
  text = "",
  className,
  withButton = false
}: NotificationInterface): JSX.Element => {
  return (
    <div className={cn("notification", className)}>
      <img
        src={FingerTopIcon}
        alt="notification icon"
        className="notification-icon"
      />
      <h4>{text}</h4>
      {withButton && (
        <button className="notification_close-btn">
          <img src={CancelIcon} alt="close" />
        </button>
      )}
    </div>
  );
};

export default Reminder;
