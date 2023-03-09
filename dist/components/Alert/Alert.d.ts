import React from "react";
import "./alert.scss";
export interface AlertInterface {
    type: "success" | "error" | "warning";
    children?: any;
    withIcon?: boolean;
    closable?: boolean;
    className?: string;
    onClose?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
declare const Alert: ({ children, type, withIcon, closable, className, onClose }: AlertInterface) => JSX.Element;
export default Alert;
