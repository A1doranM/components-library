import React from "react";
import "./dialog.scss";
export interface StatusInterface {
    className?: string;
    title: string;
    children: JSX.Element;
    acceptLabel?: JSX.Element | string;
    declineLabel?: JSX.Element | string;
    afterOpen?: () => void;
    onAccept: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onDecline: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    isOpen: boolean;
}
declare const Dialog: ({ className, title, acceptLabel, declineLabel, onAccept, onDecline, children, isOpen, afterOpen }: StatusInterface) => JSX.Element;
export default Dialog;
