import cn from "classnames";
import React, { ChangeEvent, FocusEvent, useState } from "react";
import { ErrorMessage, Field } from "formik/dist";

import SeePasswordIcon from "src/assets/images/icons/eye.svg";
import DontSeePasswordIcon from "src/assets/images/icons/eye_main.svg";

import "./field.scss";

export interface FormFieldInterface {
  name?: string;
  value?: string;
  className?: string;
  noBorders?: boolean;
  placeholder?: string;
  errClassName?: string;
  errComponent?: React.ComponentType;
  type?: React.HTMLInputTypeAttribute;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
}

const FormField = ({
  placeholder,
  type = "text",
  className = "",
  name,
  value,
  onBlur,
  onChange,
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
          <input
            type={shown ? "password" : "text"}
            name={name}
            value={value}
            placeholder={placeholder}
            className={cn("input-wrapper__input", className)}
            onChange={onChange}
            onBlur={onBlur}
          />
          <img
            src={!shown ? SeePasswordIcon : DontSeePasswordIcon}
            alt="eye"
            className={"password-input__eye"}
            onClick={handleEyeClick}
          />
        </div>
      );
    default:
      return (
        <div className={cn("input-wrapper", className)}>
          <input
            type={type}
            name={name}
            value={value}
            placeholder={" "}
            className={cn("input-wrapper__input", {
              "input-wrapper__input_no-borders": noBorders
            })}
            onChange={onChange}
            onBlur={onBlur}
          />
          <label className={"input-wrapper__label"} htmlFor={name}>
            {placeholder}
          </label>
          {/*{name && (*/}
          {/*  <ErrorMessage*/}
          {/*    name={name}*/}
          {/*    component={errComponent || "div"}*/}
          {/*    className={cn("input-wrapper__invalid-input", errClassName)}*/}
          {/*  />*/}
          {/*)}*/}
        </div>
      );
  }
};

export default FormField;
