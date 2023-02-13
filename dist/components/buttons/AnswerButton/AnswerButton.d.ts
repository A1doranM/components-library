import React from "react";
import "./answer-button.scss";
export interface AnswerButtonProps {
    label?: string;
    cancel?: boolean;
    className?: string;
    round?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    selected?: boolean;
}
declare const AnswerButton: ({ label, cancel, className, round, onClick, selected }: AnswerButtonProps) => JSX.Element;
export default AnswerButton;
