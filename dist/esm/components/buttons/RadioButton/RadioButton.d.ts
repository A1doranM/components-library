/// <reference types="react" />
import "./RadioButton.scss";
export interface RadioButtonProps {
    label?: string;
    cancel?: boolean;
    className?: string;
    round?: boolean;
    onHold?: boolean;
}
declare const RadioButton: (props: RadioButtonProps) => JSX.Element;
export default RadioButton;
