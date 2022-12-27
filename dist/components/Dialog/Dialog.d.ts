import React from "react";
import "./dialog.scss";
export interface StatusInterface {
    className?: string;
    title: string;
    child: JSX.Element;
    acceptLabel?: string;
    declineLabel?: string;
    afterOpen?: () => void;
    onAccept: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    onDecline: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    isOpen: boolean;
}
declare const Dialog: ({ className, title, acceptLabel, declineLabel, onAccept, onDecline, child, isOpen, afterOpen }: StatusInterface) => JSX.Element;
export default Dialog;
