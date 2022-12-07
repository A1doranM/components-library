import React from 'react';

interface CommonButtonProps {
    label?: string;
    outlined?: boolean;
    disabled?: boolean;
    dashed?: boolean;
    className?: string;
    large?: boolean;
    image?: string;
    round?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
declare const CommonButton: ({ label, outlined, disabled, dashed, className, large, image, round, onClick }: CommonButtonProps) => JSX.Element;

interface AnswerButtonProps {
    label?: string;
    cancel?: boolean;
    className?: string;
    round?: boolean;
    hold?: boolean;
    onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
declare const AnswerButton: ({ label, cancel, className, round, hold, onClick }: AnswerButtonProps) => JSX.Element;

interface SwitchButtonProps {
    active?: boolean;
    onChange?: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
    className?: string;
}
declare const SwitchButton: ({ active, onChange, className }: SwitchButtonProps) => JSX.Element;

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
    children: any;
}
declare const Status: ({ type, className, children }: StatusInterface) => JSX.Element;

export { CommonButton, AnswerButton as CorrectButton, SelectInput as Select, Status, SwitchButton };
