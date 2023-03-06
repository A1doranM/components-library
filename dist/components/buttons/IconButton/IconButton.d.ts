import React from "react";
import "./icon-button.scss";
export interface IconButtonInterface {
    children?: any | undefined;
    icon: any;
    className?: string;
    classNameIcon?: string;
    alt?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent> | React.KeyboardEvent<HTMLButtonElement>) => void;
}
declare const IconButton: ({ children, icon, className, classNameIcon, alt, onClick }: IconButtonInterface) => JSX.Element;
export default IconButton;
