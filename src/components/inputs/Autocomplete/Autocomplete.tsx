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
  const [query, setQuery] = useState('');

  const getAsyncData = (): any => {
    const url = new URL(query ? `${client.url}?query=${query}` : client.url);

    return fetch(url.toString(), {
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
            .map((data) => ({ value: data.id, label: data.name }));
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

  const handleInputChange = (value: string, meta: any, name: string) => {
    if (value.length >= 3) {
      setMenuOpen(true);
      setQuery(value);
    }

    props.onInputChange && props.onInputChange(value, meta, name);
  };

  const handleOptionSelect = (option: any, name) => {
    setMenuOpen(false);
    props.onChange && props.onChange(option, name);
  };

  return (
    <div className="select-wrapper autocomplete-wrapper">
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
