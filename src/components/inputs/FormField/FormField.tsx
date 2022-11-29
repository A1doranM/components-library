// @ts-nocheck

import cn from "classnames";
import React, { FocusEvent, useState } from "react";
import { ErrorMessage, Field } from "formik";

import SeePasswordIcon from "src/assets/images/icons/eye.svg";
import DontSeePasswordIcon from "src/assets/images/icons/eye_main.svg";

import "./field.scss";

export interface FormFieldInterface {
  name: string;
  errors?: any;
  touched?: any;
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
  errors,
  touched,
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
        <div className={cn("form-field-wrapper", "password-input", className)}>
          <Field
            type={shown ? "password" : "text"}
            name={name}
            placeholder={" "}
            className={cn(
              "form-field",
              { "form-field_error": errors[name] && touched[name] },
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
        <div className={cn("form-field-wrapper", className)}>
          <Field
            type={type}
            name={name}
            placeholder={" "}
            className={cn("form-field", {
              "form-field_error": errors[name] && touched[name],
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
