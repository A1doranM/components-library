import React, { FocusEvent } from 'react';
import { FormikErrors, FormikTouched } from 'formik';

interface TitleInterface {
    size?: 10 | 12 | 14 | 16 | 20 | 24 | 32 | 36 | 48;
    weight?: number;
    className?: string;
    children: string;
}
declare const Title: ({ size, weight, className, children }: TitleInterface) => JSX.Element;

interface ExpandInterface {
    title: string;
    children?: any;
    open?: boolean;
    isLast?: boolean;
    titleClassName?: string;
}
declare const Expand: ({ children, title, open, isLast, titleClassName }: ExpandInterface) => JSX.Element;

interface StatusInterface {
    type: "RECEIVED" | "CANCELED" | "ORDERED" | "ANNUL" | "DRAFT" | "PASSED" | "NOT-PASSED";
    className?: string;
    children: any;
}
declare const Status: ({ type, className, children }: StatusInterface) => JSX.Element;

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

interface LinkInterface {
    to: string;
    text: string;
    customContent?: any;
    customStyles?: string;
}
interface NavigationInterface {
    navLinks: Array<LinkInterface>;
    className?: string;
}
declare const Navigation: ({ navLinks, className }: NavigationInterface) => JSX.Element;

interface NotificationInterface {
    text: string;
    className?: string;
    withButton?: boolean;
}
declare const Reminder: ({ text, className, withButton }: NotificationInterface) => JSX.Element;

interface FormFieldInterface {
    name: string;
    errors?: FormikErrors<{
        email: string;
    }>;
    touched?: FormikTouched<{
        email: string;
    }>;
    className?: string;
    noBorders?: boolean;
    placeholder?: string;
    errClassName?: string;
    errComponent?: React.ComponentType;
    type?: React.HTMLInputTypeAttribute;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}
declare const FormField: ({ name, placeholder, type, className, errors, touched, onBlur, noBorders, errComponent, errClassName }: FormFieldInterface) => JSX.Element;

interface RadioButtonInterface {
    title?: string;
    body?: string;
    footer?: string;
    warning?: string;
    name: string;
    value: any;
    checked: boolean;
    disabled?: boolean;
    className?: string;
    onClick: (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
}
declare const RadioButton: ({ name, body, value, title, footer, checked, warning, onClick, disabled, className }: RadioButtonInterface) => JSX.Element;

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

interface CircleProgressBarInterface {
    progress: number;
    className?: string;
}
declare const CircleProgressBar: ({ progress, className }: CircleProgressBarInterface) => JSX.Element;

interface SimpleUploadFileInterface {
    className?: string;
    text?: string;
    uploadedText?: string;
}
declare const SimpleUploadFile: ({ className, text, uploadedText }: SimpleUploadFileInterface) => JSX.Element;

interface VisualUploadFileInterface {
    className?: string;
    title?: string;
    backgroundImg?: string;
}
declare const VisualUploadFile: ({ title, backgroundImg, className }: VisualUploadFileInterface) => JSX.Element;

export { AnswerButton, CircleProgressBar, CommonButton, Expand, FormField, Navigation, Reminder as Notification, RadioButton, SelectInput as Select, SimpleUploadFile, Status, SwitchButton, Title, VisualUploadFile };
