import React from "react";
import "./radio-button.scss";
export interface RadioButtonInterface {
    title?: string;
    body?: string;
    footer?: string;
    warning?: string;
    name: string;
    value: any;
    checked: boolean;
    disabled?: boolean;
    className?: string;
    onClick: (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
}
declare const RadioButton: ({ name, body, value, title, footer, checked, warning, onClick, disabled, className }: RadioButtonInterface) => JSX.Element;
export default RadioButton;
