import React from "react";
import "./dialog.scss";
export interface DialogInterface {
    children: any;
    className?: string;
    overlayClassName?: string;
    onClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    title: string;
}
declare const Dialog: ({ children, className, overlayClassName, onClose, title }: DialogInterface) => JSX.Element;
export default Dialog;
