/// <reference types="react" />
import { ChangeEvent } from 'react';

interface CommonButtonProps {
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

interface CorrectButtonProps {
    label?: string;
    cancel?: boolean;
    className?: string;
    round?: boolean;
    onHold?: boolean;
    onClick?: (e: ChangeEvent<HTMLInputElement>) => void;
}
declare const CorrectButton: (props: CorrectButtonProps) => JSX.Element;

interface SwitchButtonProps {
    active?: boolean;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
declare const SwitchButton: (props: SwitchButtonProps) => JSX.Element;

interface SelectInputInterface {
    onChange?: (value: any) => void;
    onBlur?: () => void;
    options?: Array<{
        value?: string | number;
        label?: string | number;
    }>;
    placeholder?: string;
    className?: string;
    name?: string;
    styles?: object;
}
declare const SelectInput: ({ name, options, placeholder, onChange, onBlur, className, styles }: SelectInputInterface) => JSX.Element;

interface StatusInterface {
    type: "RECEIVED" | "CANCELED" | "ORDERED" | "ANNUL" | "DRAFT" | "PASSED" | "NOT-PASSED";
    className?: string;
    children?: any;
}
declare const Status: ({ type, className, children }: StatusInterface) => JSX.Element;

export { CommonButton, CorrectButton, SelectInput as Select, Status, SwitchButton };
