import React from "react";
import "./dialog.scss";
export interface DialogInterface {
    title: string;
    isOpen: boolean;
    children: JSX.Element;
    onAccept: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onDecline: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    className?: string;
    afterOpen?: () => void;
    customControls?: (onAccept: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void, onDecline: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) => JSX.Element;
    acceptLabel?: JSX.Element | string;
    declineLabel?: JSX.Element | string;
    parentElement?: string | HTMLElement;
}
declare const Dialog: ({ title, isOpen, children, onAccept, onDecline, className, afterOpen, customControls, acceptLabel, declineLabel, parentElement }: DialogInterface) => JSX.Element;
export default Dialog;
