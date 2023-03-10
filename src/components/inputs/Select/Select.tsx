import { useState } from "react";
import { ErrorMessage } from "formik";
import cn from "classnames";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import { InputActionMeta } from "react-select/dist/declarations/src/types";

import "./select.scss";

export interface SelectInputInterface {
  onChange?: (item: any, name: string) => void;
  onFieldClick?: () => void;
  onBlur?: () => void;
  onInputChange?: (
    newValue: string,
    actionMeta: InputActionMeta,
    name: string
  ) => void;
  options?: Array<{
    value?: string | number;
    label?: string | number;
  }>;
  placeholder?: string;
  className?: string;
  name?: string;
  inputValue?: string;
  styles?: object;
  modalPortalTarget?: HTMLElement | null;
  defaultMenuIsOpen?: boolean;
  menuIsOpen?: boolean;
  asyncSelect?: boolean;
  //Function that returns a promise, which is the set of options to be used once the promise resolves.
  asyncSelectOptionsLoader?: () => any;
  errClassName?: string;
  withFormik?: boolean;
}

const SelectInput = ({
  name,
  inputValue,
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
  asyncSelectOptionsLoader,
  errClassName,
  withFormik
}: SelectInputInterface) => {
  const [hasValue, setHasValue] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  // useEffect(() => {
  //   inputValue.length < 1 && setSelectedOption(null);
  // }, [inputValue]);

  const handleChange = (item: any) => {
    item.value && setHasValue(true);
    onChange && onChange(item, name);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    !hasValue && setIsFocused(false);
    onBlur && onBlur();
  };

  const handleInputChange = (value: string, meta: any) => {
    onInputChange && onInputChange(value, meta, name);
  };

  const filterOptions = (inputValue) => {
    return options.filter(
      (option) =>
        String(option.label)
          .toLowerCase()
          .includes(String(inputValue).toLowerCase()) && inputValue.length > 0
    );
  };

  return (
    <div className="select-wrapper" onClick={onFieldClick}>
      {!asyncSelect ? (
        <Select
          options={filterOptions(inputValue || "")}
          inputValue={inputValue}
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
          value={filterOptions(inputValue || "")}
          cacheOptions
          defaultOptions={filterOptions(inputValue || "")}
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
          inputValue={inputValue}
          loadingMessage={() => (
            <p className="select__loading-text">Завантаження...</p>
          )}
          loadOptions={asyncSelectOptionsLoader}
        />
      )}
      <p
        className={cn("select-wrapper__placeholder", {
          "select-wrapper__placeholder_active": isFocused || inputValue
        })}
      >
        {placeholder}
      </p>
      {withFormik && (
        <ErrorMessage
          name={name}
          component="div"
          className={cn("field-error-message", errClassName)}
        />
      )}
    </div>
  );
};

export default SelectInput;
