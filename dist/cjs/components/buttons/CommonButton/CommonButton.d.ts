import { ChangeEvent } from "react";
import "./common-button.scss";
export interface CommonButtonProps {
    label?: string;
    outlined?: boolean;
    disabled?: boolean;
    dashed?: boolean;
    className?: string;
    large?: boolean;
    image?: string;
    round?: boolean;
    onClick?: (e: ChangeEvent<HTMLInputElement>) => void;
}
declare const CommonButton: (props: CommonButtonProps) => JSX.Element;
export default CommonButton;
