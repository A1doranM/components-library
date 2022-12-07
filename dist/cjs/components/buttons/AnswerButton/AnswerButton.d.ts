import React from "react";
import "./correct-button.scss";
export interface AnswerButtonProps {
    label?: string;
    cancel?: boolean;
    className?: string;
    round?: boolean;
    hold?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
declare const AnswerButton: ({ label, cancel, className, round, hold, onClick }: AnswerButtonProps) => JSX.Element;
export default AnswerButton;