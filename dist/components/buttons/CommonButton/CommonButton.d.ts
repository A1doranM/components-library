import React from "react";
import "./common-button.scss";
export interface CommonButtonProps {
    type?: "submit" | "reset" | "button" | undefined;
    label?: any;
    outlined?: boolean;
    disabled?: boolean;
    dashed?: boolean;
    className?: string;
    large?: boolean;
    image?: string;
    alt?: string;
    round?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
declare const CommonButton: ({ type, label, outlined, disabled, dashed, className, large, image, alt, round, onClick }: CommonButtonProps) => JSX.Element;
export default CommonButton;
