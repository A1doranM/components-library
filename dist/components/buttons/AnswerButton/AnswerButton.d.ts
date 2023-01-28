import React from "react";
import "./correct-button.scss";
export interface AnswerButtonProps {
    label?: string;
    cancel?: boolean;
    className?: string;
    round?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
declare const AnswerButton: ({ label, cancel, className, round, onClick }: AnswerButtonProps) => JSX.Element;
export default AnswerButton;
