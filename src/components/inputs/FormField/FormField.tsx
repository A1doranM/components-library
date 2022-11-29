// @ts-nocheck

import cn from "classnames";
import React, { FocusEvent, useState } from "react";
import { ErrorMessage, Field } from "formik";

import SeePasswordIcon from "src/assets/images/icons/eye.svg";
import DontSeePasswordIcon from "src/assets/images/icons/eye_main.svg";

import "./field.scss";

export interface FormFieldInterface {
  name: string;
  className?: string;
  noBorders?: boolean;
  placeholder?: string;
  errClassName?: string;
  errComponent?: React.ComponentType;
  type?: React.HTMLInputTypeAttribute;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

const FormField = ({
  placeholder,
  type = "text",
  className = "",
  name,
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
        <div className={cn("input-wrapper", "password-input")}>
          <Field
            type={shown ? "password" : "text"}
            name={name}
            placeholder={" "}
            className={cn("input-wrapper__input", className)}
            onBlur={onBlur}
          />
          <img
            src={!shown ? SeePasswordIcon : DontSeePasswordIcon}
            alt="eye"
            className="password-input__eye"
            onClick={handleEyeClick}
          />
          <label className="input-wrapper__label" htmlFor={name}>
            {placeholder}
          </label>
          <ErrorMessage
            name={name}
            component={errComponent || "div"}
            className={cn("input-wrapper__invalid-input", errClassName)}
          />
        </div>
      );
    default:
      return (
        <div className={cn("input-wrapper", className)}>
          <Field
            type={type}
            name={name}
            placeholder={" "}
            className={cn("input-wrapper__input", {
              "input-wrapper__input_no-borders": noBorders
            })}
            onBlur={onBlur}
          />
          <label className="input-wrapper__label" htmlFor={name}>
            {placeholder}
          </label>
          <ErrorMessage
            name={name}
            component={errComponent || "div"}
            className={cn("input-wrapper__invalid-input", errClassName)}
          />
        </div>
      );
  }
};

export default FormField;
