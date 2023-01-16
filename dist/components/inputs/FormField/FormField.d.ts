import React, { FocusEvent } from "react";
import { FormikErrors, FormikTouched } from "formik";
import "./field.scss";
export interface FormFieldInterface {
    name: string;
    errors?: FormikErrors<{
        email: string;
    }>;
    touched?: FormikTouched<{
        email: string;
    }>;
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
    constructor(props: FormFieldInterface);
    static defaultProps: {
        type: string;
        className: string;
        errors: any;
        touched: any;
    };
    render(): JSX.Element;
}
export default FormField;
