// @ts-nocheck

import cn from "classnames";
import React, { FocusEvent, useState } from "react";
import { ErrorMessage, Field, FormikErrors, FormikTouched } from "formik";

import SeePasswordIcon from "../../../assets/images/icons/eye.svg";
import DontSeePasswordIcon from "../../../assets/images/icons/eye_main.svg";

import "./field.scss";

export interface FormFieldInterface {
  name: string;
  errors?: FormikErrors<{ email: string }>;
  touched?: FormikTouched<{ email: string }>;
  className?: string;
  noBorders?: boolean;
  placeholder?: string;
  errClassName?: string;
  errComponent?: React.ComponentType;
  type?: React.HTMLInputTypeAttribute;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

const FormField = ({
  name,
  placeholder,
  type = "text",
  className = "",
  errors = undefined,
  touched = undefined,
  onBlur,
  noBorders,
  errComponent,
  errClassName
}: FormFieldInterface): JSX.Element => {
  const [shown, setShown] = useState(false);

  const handleEyeClick = () => {
    setShown((prevState) => !prevState);
  };

  switch (type) {
    case "password":
      return (
        <div
          className={cn("form-field-wrapper", "password-input", className)}
          data-testid="input"
        >
          <Field
            type={shown ? "password" : "text"}
            name={name}
            placeholder={" "}
            className={cn(
              "form-field",
              {
                "form-field_error":
                  errors && touched && errors[name] && touched[name]
              },
              className
            )}
            onBlur={onBlur}
          />
          <img
            src={!shown ? SeePasswordIcon : DontSeePasswordIcon}
            alt="eye"
            className="password-input__eye"
            onClick={handleEyeClick}
          />
          <label className="form-field-label" htmlFor={name}>
            {placeholder}
          </label>
          <ErrorMessage
            name={name}
            component={errComponent || "div"}
            className={cn("form-field-error-message", errClassName)}
          />
        </div>
      );
    default:
      return (
        <div
          className={cn("form-field-wrapper", className)}
          data-testid="input"
        >
          <Field
            type={type}
            name={name}
            placeholder={" "}
            className={cn("form-field", {
              "form-field_error":
                errors && touched && errors[name] && touched[name],
              "form-field_no-borders": noBorders
            })}
            onBlur={onBlur}
          />
          <label className="form-field-label" htmlFor={name}>
            {placeholder}
          </label>
          <ErrorMessage
            name={name}
            component={errComponent || "div"}
            className={cn("form-field-error-message", errClassName)}
          />
        </div>
      );
  }
};

export default FormField;
