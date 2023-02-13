import React, { useState } from "react";
import cn from "classnames";
import Select from "react-select";

import "./select.scss";

export interface SelectInputInterface {
  onChange?: (value: any) => void;
  onFieldClick?: () => void;
  onBlur?: () => void;
  options?: Array<{
    value?: string | number;
    label?: string | number;
  }>;
  placeholder?: string;
  className?: string;
  name?: string;
  styles?: object;
  modalPortalTarget?: HTMLElement | null;
  defaultMenuIsOpen?: boolean;
}

const SelectInput = ({
  name,
  options,
  placeholder = "",
  onChange,
  onFieldClick,
  onBlur,
  className,
  styles,
  modalPortalTarget = document.body,
  defaultMenuIsOpen
}: SelectInputInterface) => {
  const [hasValue, setHasValue] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleChange = (e: any) => {
    e.value && setHasValue(true);
    onChange && onChange(e);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    !hasValue && setIsFocused(false);
    onBlur && onBlur();
  };

  return (
    <div className="select-wrapper" onClick={onFieldClick}>
      <Select
        options={options}
        className={cn("select-container", className)}
        classNamePrefix="select"
        placeholder={placeholder}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        styles={styles}
        menuPortalTarget={modalPortalTarget}
        defaultMenuIsOpen={defaultMenuIsOpen}
      />
      <p
        className={cn("select-wrapper__placeholder", {
          "select-wrapper__placeholder_active": isFocused
        })}
      >
        {placeholder}
      </p>
    </div>
  );
};

export default SelectInput;
