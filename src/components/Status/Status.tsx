import React from "react";
import cn from "classnames";

import "./status.scss";

export interface StatusInterface {
  type:
    | "RECEIVED"
    | "CANCELED"
    | "ORDERED"
    | "ANNUL"
    | "DRAFT"
    | "PASSED"
    | "NOT-PASSED";
  className?: string;
  children: any;
}

const Status = ({
                  type,
                  className = "",
                  children
                }: StatusInterface): JSX.Element => {
  return (
    <h3
      className={cn("status", className, {
        ["status_received"]: type === "RECEIVED",
        ["status_canceled"]: type === "CANCELED",
        ["status_ordered"]: type === "ORDERED",
        ["status_annul"]: type === "ANNUL",
        ["status_draft"]: type === "DRAFT",
        ["status_passed"]: type === "PASSED",
        ["status_not-passed"]: type === "NOT-PASSED"
      })}
      data-testid="status"
    >
      {children}
    </h3>
  );
};

export default Status;
