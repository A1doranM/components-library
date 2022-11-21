/// <reference types="react" />
import "./CommonButton.scss";
export interface ButtonProps {
    label: string;
    outlined?: boolean;
    disabled?: boolean;
    dashed?: boolean;
    className?: string;
    large?: boolean;
    image?: string;
}
declare const CommonButton: (props: ButtonProps) => JSX.Element;
export default CommonButton;
