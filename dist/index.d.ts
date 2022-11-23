/// <reference types="react" />
interface CommonButtonProps {
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

interface CorrectButtonProps {
    label?: string;
    cancel?: boolean;
    className?: string;
    round?: boolean;
    onHold?: boolean;
}
declare const CorrectButton: (props: CorrectButtonProps) => JSX.Element;

interface RadioButtonProps {
    label?: string;
    cancel?: boolean;
    className?: string;
    round?: boolean;
    onHold?: boolean;
}
declare const RadioButton: (props: RadioButtonProps) => JSX.Element;

export { CommonButton, CorrectButton, RadioButton };
