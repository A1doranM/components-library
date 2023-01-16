import React from "react";
import cn from "classnames";
import Select from "react-select";

import "./select.scss";

export interface SelectInputInterface {
  onChange?: (value: any) => void;
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
}

const SelectInput = ({
  name,
  options,
  placeholder = "",
  onChange,
  onBlur,
  className,
  styles,
  modalPortalTarget = document.body
}: SelectInputInterface) => {
  return (
    <Select
      options={options}
      className={cn("select-container", className)}
      classNamePrefix="select"
      placeholder={placeholder}
      name={name}
      onChange={onChange}
      onBlur={onBlur}
      styles={styles}
      menuPortalTarget={modalPortalTarget}
      menuIsOpen={true}
    />
  );
};

export default SelectInput;
