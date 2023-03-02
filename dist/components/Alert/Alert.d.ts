import React from "react";
import "./alert.scss";
export interface AlertInterface {
    text: string;
    type: "success" | "error" | "warning";
    withIcon?: boolean;
    closable?: boolean;
    className?: string;
    onClose?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
declare const Alert: ({ text, type, withIcon, closable, className, onClose }: AlertInterface) => JSX.Element;
export default Alert;
