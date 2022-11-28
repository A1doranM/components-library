/// <reference types="react" />
import "./CommonButton.scss";
export interface CommonButtonProps {
    label?: string;
    outlined?: boolean;
    disabled?: boolean;
    dashed?: boolean;
    className?: string;
    large?: boolean;
    image?: string;
    round?: boolean;
}
declare const CommonButton: (props: CommonButtonProps) => JSX.Element;
export default CommonButton;