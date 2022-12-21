import React from "react";
import { FormikErrors, FormikTouched } from "formik";
import "./checkbox.scss";
export interface iCheckbox {
    name: string;
    title?: string;
    checked?: boolean;
    disabled?: boolean;
    className?: string;
    errors?: FormikErrors<{
        email: string;
    }>;
    touched?: FormikTouched<{
        email: string;
    }>;
    errClassName?: string;
    errComponent?: React.ComponentType;
}
declare const Checkbox: ({ name, title, checked, disabled, className, errors, touched, errComponent, errClassName }: iCheckbox) => JSX.Element;
export default Checkbox;
