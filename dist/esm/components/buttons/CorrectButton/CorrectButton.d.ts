import { ChangeEvent } from "react";
import "./correct-button.scss";
export interface CorrectButtonProps {
    label?: string;
    cancel?: boolean;
    className?: string;
    round?: boolean;
    onHold?: boolean;
    onClick?: (e: ChangeEvent<HTMLInputElement>) => void;
}
declare const CorrectButton: (props: CorrectButtonProps) => JSX.Element;
export default CorrectButton;
