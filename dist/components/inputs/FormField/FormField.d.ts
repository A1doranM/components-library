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
    className?: string;
    noBorders?: boolean;
    placeholder?: string;
    errClassName?: string;
    errComponent?: React.ComponentType;
    type?: React.HTMLInputTypeAttribute;
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}
declare const FormField: ({ name, placeholder, type, className, errors, touched, onBlur, noBorders, errComponent, errClassName }: FormFieldInterface) => JSX.Element;
export default FormField;
