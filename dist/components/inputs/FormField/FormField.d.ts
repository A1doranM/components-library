import React, { ChangeEvent, FocusEvent } from "react";
import { FormikErrors, FormikTouched } from "formik";
import "./field.scss";
export interface FormFieldInterface {
    name: string;
    value: string | number | readonly string[];
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
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
