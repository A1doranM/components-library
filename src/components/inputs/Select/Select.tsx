import React, { useState } from "react";
import cn from "classnames";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import { InputActionMeta } from "react-select/dist/declarations/src/types";

import "./select.scss";

export interface SelectInputInterface {
  onChange?: (value: any) => void;
  onFieldClick?: () => void;
  onBlur?: () => void;
  onInputChange?: (newValue: string, actionMeta: InputActionMeta) => void;
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
  menuIsOpen?: boolean;
  asyncSelect?: boolean;
  //Function that returns a promise, which is the set of options to be used once the promise resolves.
  asyncSelectOptionsLoader?: () => any;
}

const SelectInput = ({
  name,
  options = [],
  placeholder = "",
  onChange,
  onInputChange,
  onFieldClick,
  onBlur,
  className,
  styles,
  menuIsOpen,
  modalPortalTarget = document.body,
  defaultMenuIsOpen,
  asyncSelect,
  asyncSelectOptionsLoader
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

  const handleInputChange = (value: string, meta: any) => {
    onInputChange && onInputChange(value, meta);
  };

  return (
    <div className="select-wrapper" onClick={onFieldClick}>
      {!asyncSelect ? (
        <Select
          options={options}
          className={cn("select-container", className)}
          classNamePrefix="select"
          placeholder={placeholder}
          name={name}
          onInputChange={handleInputChange}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          styles={styles}
          menuIsOpen={menuIsOpen}
          menuPortalTarget={modalPortalTarget}
          defaultMenuIsOpen={defaultMenuIsOpen}
        />
      ) : (
        <AsyncSelect
          cacheOptions
          defaultOptions={options}
          className={cn(
            "select-container",
            "select-container_async",
            className
          )}
          menuIsOpen={menuIsOpen}
          classNamePrefix="select"
          placeholder={placeholder}
          name={name}
          onInputChange={handleInputChange}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          styles={styles}
          menuPortalTarget={modalPortalTarget}
          noOptionsMessage={() => null}
          loadingMessage={() => (
            <p className="select__loading-text">Завантаження...</p>
          )}
          loadOptions={asyncSelectOptionsLoader}
        />
      )}
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
