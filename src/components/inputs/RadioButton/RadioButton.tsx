import React from "react";
import cn from "classnames";

import "./radio-button.scss";

export interface RadioButtonInterface {
  title?: string;
  body?: string;
  footer?: string;
  warning?: string;
  name: string;
  value: any;
  checked: boolean;
  disabled?: boolean;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => void;
}

const RadioButton = ({
  name,
  body,
  value,
  title,
  footer,
  checked,
  warning,
  onClick,
  disabled,
  className
}: RadioButtonInterface) => {
  return (
    <label
      className={cn("radio-btn", className, {
        ["radio-btn_active"]: checked,
        ["radio-btn_disabled"]: disabled
      })}
      onClick={onClick}
    >
      <input
        className={"radio-btn__input"}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={() => {}}
      />
      <span className={"radio-btn__indicator"} />
      <div className={"radio-btn__info"}>
        {title && <p className={"radio-btn__info-title"}>{title}</p>}
        {body && <p className={"radio-btn__info-body"}>{body}</p>}
        {footer && <p className={"radio-btn__info-footer"}>{footer}</p>}
        {warning && (
          <p className={"radio-btn__info-warning"}>{warning}</p>
        )}
      </div>
    </label>
  );
};

export default RadioButton;
