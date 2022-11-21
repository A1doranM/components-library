/// <reference types="react" />
interface ButtonProps {
    label: string;
    outlined?: boolean;
    disabled?: boolean;
    dashed?: boolean;
    className?: string;
    large?: boolean;
    image?: string;
}
declare const CommonButton: (props: ButtonProps) => JSX.Element;

export { CommonButton };
