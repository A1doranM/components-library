import React, { useState } from "react";

import Select, { SelectInputInterface } from "../Select/Select";

import "./autocomplete.scss";

export interface AutocompleteInterface
  extends Omit<SelectInputInterface, "options"> {
  client: {
    url: string;
    headers?: {};
    parser?: (data: any) => Array<{
      value?: string | number;
      label?: string | number;
    }>;
  };
}

const Autocomplete = ({ client, ...props }: AutocompleteInterface) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const getAsyncData = (): any => {
    return fetch(client.url, {
      headers: client.headers
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (client.parser) {
          return client.parser(data);
        } else {
          return data
            .slice(0, 50)
            .map((data) => ({ value: data.id, label: data.title }));
        }
      })
      .catch(() => {
        return [];
      });
  };

  const promiseOptions = (): any =>
    new Promise((resolve) => {
      if (menuOpen) {
        setTimeout(() => {
          resolve(getAsyncData());
        }, 1000);
      } else {
        return [];
      }

      setTimeout(() => {
        resolve(getAsyncData());
      }, 1000);
    });

  const handleInputChange = (value: string, meta: any) => {
    if (value.length >= 3) {
      setMenuOpen(true);
    }

    props.onInputChange && props.onInputChange(value, meta);
  };

  const handleOptionSelect = (option: string) => {
    setMenuOpen(false);
    props.onChange && props.onChange(option);
  };

  return (
    <div className="select-wrapper">
      <Select
        asyncSelect={true}
        menuIsOpen={menuOpen}
        asyncSelectOptionsLoader={promiseOptions}
        onChange={handleOptionSelect}
        onInputChange={handleInputChange}
        {...props}
      />
    </div>
  );
};
export default Autocomplete;
