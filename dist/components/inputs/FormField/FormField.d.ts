import React, { FocusEvent } from "react";
import "./field.scss";
export interface FormFieldInterface {
    name: string;
    value?: any;
    readonly?: boolean;
    className?: string;
    noBorders?: boolean;
    placeholder?: string;
    errClassName?: string;
    errComponent?: React.ComponentType;
    type?: React.HTMLInputTypeAttribute;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}
declare class FormField extends React.Component<FormFieldInterface> {
    static defaultProps: {
        type: string;
        className: string;
    };
    constructor(props: FormFieldInterface);
    render(): JSX.Element;
}
export default FormField;
