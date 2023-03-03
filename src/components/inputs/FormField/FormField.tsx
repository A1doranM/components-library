// @ts-nocheck
import cn from "classnames";
import React, { FocusEvent } from "react";
import { ErrorMessage, Field } from "formik";

import SeePasswordIcon from "../../../assets/images/icons/eye.svg";
import DontSeePasswordIcon from "../../../assets/images/icons/eye_main.svg";

import "./field.scss";

export interface FormFieldInterface {
  name: string;
  readonly?: boolean;
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
    className: ""
  };

  render(): JSX.Element {
    const {
      name,
      placeholder,
      type,
      className,
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

    console.log("Name: ", name);

    switch (type) {
      case "password":
        return (
          <div
            className={cn("form-field-wrapper", "password-input", className)}
          >
            <Field
              type={this.state.show ? "password" : "text"}
              name={name}
              placeholder={" "}
              className={cn("form-field", className)}
              onBlur={onBlur}
              data-testid="input"
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
                "form-field_no-borders": noBorders
              })}
              onBlur={onBlur}
              data-testid="input"
            />
            <label className="form-field-label" htmlFor={name}>
              {placeholder}
            </label>
            <ErrorMessage
              name={name}
              component="div"
              className={cn("form-field-error-message", errClassName)}
            />
          </div>
        );
    }
  }
}

export default FormField;
