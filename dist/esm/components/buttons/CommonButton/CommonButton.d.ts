import React from "react";
import "./common-button.scss";
export interface CommonButtonProps {
    label?: string;
    outlined?: boolean;
    disabled?: boolean;
    dashed?: boolean;
    className?: string;
    large?: boolean;
    image?: string;
    round?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
declare const CommonButton: ({ label, outlined, disabled, dashed, className, large, image, round, onClick }: CommonButtonProps) => JSX.Element;
export default CommonButton;
