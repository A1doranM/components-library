import cn from "classnames";
import React from "react";
import { ErrorMessage, Field, FormikErrors, FormikTouched } from "formik";

import "./checkbox.scss";

export interface iCheckbox {
  name: string;
  title?: string;
  checked?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: (e: any) => void;
  errors?: FormikErrors<{ email: string }>;
  touched?: FormikTouched<{ email: string }>;
  errClassName?: string;
  errComponent?: React.ComponentType;
}

const Checkbox = ({
  name,
  title,
  checked,
  disabled,
  className,
  onClick,
  errors,
  touched,
  errComponent,
  errClassName
}: iCheckbox): JSX.Element => {
  return (
    <label
      className={cn("checkbox", className, {
        ["checkbox_active"]: checked,
        ["checkbox_disabled"]: disabled
      })}
    >
      <Field
        type="checkbox"
        name={name}
        className="checkbox__input"
        onClick={onClick}
      />
      <span className="checkbox__indicator" />
      <div className="checkbox__info">
        <span className="checkbox__info-title">{title}</span>
      </div>
      {errors && touched && (
        <ErrorMessage
          name={name}
          component={errComponent || "div"}
          className={cn("checkbox-warning", errClassName)}
        />
      )}
    </label>
  );
};

export default Checkbox;
