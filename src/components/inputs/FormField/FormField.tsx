// @ts-nocheck
import cn from "classnames";
import React, { ChangeEvent, FocusEvent } from "react";
import { ErrorMessage, FormikErrors, FormikTouched } from "formik";

import SeePasswordIcon from "../../../assets/images/icons/eye.svg";
import DontSeePasswordIcon from "../../../assets/images/icons/eye_main.svg";

import "./field.scss";

export interface FormFieldInterface {
  name: string;
  value: string | number | readonly string[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
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

class FormField extends React.Component<FormFieldInterface> {
  constructor(props: FormFieldInterface) {
    super(props);
    this.state = {
      show: false
    };
  }

  static defaultProps = {
    type: "text",
    className: "",
    errors: undefined,
    touched: undefined
  };

  render(): JSX.Element {
    const {
      name,
      value,
      onChange,
      placeholder,
      type,
      className,
      errors,
      touched,
      onBlur,
      noBorders,
      errComponent,
      errClassName
    } = this.props;

    const handleEyeClick = () => {
      this.setState({
        show: !this.state.show
      });
    };

    switch (type) {
      case "password":
        return (
          <div
            className={cn("form-field-wrapper", "password-input", className)}
            data-testid="input"
          >
            <input
              type={this.state.show ? "password" : "text"}
              name={name}
              value={value}
              onChange={onChange}
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
              src={!this.state.show ? SeePasswordIcon : DontSeePasswordIcon}
              alt="eye"
              className="password-input__eye"
              onClick={handleEyeClick}
            />
            <label className="form-field-label" htmlFor={name}>
              {placeholder}
            </label>
            {/*<ErrorMessage*/}
            {/*  name={name}*/}
            {/*  component={errComponent || "div"}*/}
            {/*  className={cn("form-field-error-message", errClassName)}*/}
            {/*/>*/}
          </div>
        );
      default:
        return (
          <div
            className={cn("form-field-wrapper", className)}
            data-testid="input"
          >
            <input
              type={type}
              name={name}
              value={value}
              onChange={onChange}
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
            {/*<ErrorMessage*/}
            {/*  name={name}*/}
            {/*  component={errComponent || "div"}*/}
            {/*  className={cn("form-field-error-message", errClassName)}*/}
            {/*/>*/}
          </div>
        );
    }
  }
}

export default FormField;
