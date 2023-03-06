import React from "react";
import Modal from "react-modal";
import "./dialog.scss";
export interface DialogInterface extends Modal.Props {
    children: any;
    className?: string;
    overlayClassName?: string;
    onClose: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
declare const Dialog: ({ children, className, overlayClassName, onClose, ...props }: DialogInterface) => JSX.Element;
export default Dialog;
