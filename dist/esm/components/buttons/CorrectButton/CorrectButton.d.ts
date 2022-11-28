/// <reference types="react" />
import "./CorrectButton.scss";
export interface CorrectButtonProps {
    label?: string;
    cancel?: boolean;
    className?: string;
    round?: boolean;
    onHold?: boolean;
}
declare const CorrectButton: (props: CorrectButtonProps) => JSX.Element;
export default CorrectButton;
