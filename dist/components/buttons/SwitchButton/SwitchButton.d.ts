import React from "react";
import "./switch-button.scss";
export interface SwitchButtonProps {
    active?: boolean;
    onChange?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
    className?: string;
}
declare const SwitchButton: ({ active, onChange, className }: SwitchButtonProps) => JSX.Element;
export default SwitchButton;
