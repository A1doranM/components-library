// @ts-nocheck
import cn from "classnames";
import React, { FocusEvent } from "react";
import { ErrorMessage, Field } from "formik";

import SeePasswordIcon from "../../../assets/images/icons/eye.svg";
import DontSeePasswordIcon from "../../../assets/images/icons/eye_main.svg";

import "./field.scss";

export interface FormFieldInterface {
  name: string;
  value?: any;
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
  static defaultProps = {
    type: "text",
    className: ""
  };

  constructor(props: FormFieldInterface) {
    super(props);
    this.state = {
      show: false
    };
  }

  render(): JSX.Element {
    const {
      name,
      placeholder,
      type,
      value,
      className,
      readonly,
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

    console.log("Value: ", value);

    switch (type) {
      case "password":
        return (
          <div
            className={cn("form-field-wrapper", "password-input", className)}
          >
            <Field
              type={this.state.show ? "password" : "text"}
              name={name}
              value={value}
              readOnly={readonly}
              placeholder={" "}
              className={cn("form-field", {"form-field_readonly": readonly}, className)}
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
              {readonly && value ? '' : placeholder}
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
              value={value}
              readOnly={readonly}
              placeholder={" "}
              className={cn("form-field", {
                "form-field_no-borders": noBorders,
                "form-field_readonly": readonly
              })}
              onBlur={onBlur}
              data-testid="input"

            />
            <label className="form-field-label" htmlFor={name}>
              {readonly && value ? '' : placeholder}
            </label>
            <ErrorMessage
              name={name}
              component="div"
              className={cn("field-error-message", errClassName)}
            />
          </div>
        );
    }
  }
}

export default FormField;
