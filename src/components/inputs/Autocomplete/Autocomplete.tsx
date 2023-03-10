import React, { useState, useEffect } from "react";

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
  dataFieldsNames?: {
    valueFieldName: string;
    labelFieldName: string;
  };
  initialValue?: string;
}

const Autocomplete = ({
  client,
  dataFieldsNames,
  initialValue,
  ...props
}: AutocompleteInterface) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState(initialValue || "");

  useEffect(() => {
    getAsyncData();
  }, [query]);

  const getAsyncData = (): any => {
    console.log("query", query);
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
          return data.slice(0, 50).map((data) => {
            let result;

            if (dataFieldsNames) {
              result = {
                value: data[dataFieldsNames.valueFieldName],
                label: data[dataFieldsNames.labelFieldName]
              };
            } else {
              result = {
                value: data.id,
                label: data.name
              };
            }

            return result;
          });
        }
      })
      .catch(() => {
        return [];
      });
  };
  const promiseOptions = (): any =>
    new Promise((resolve) => {
      if (menuOpen) {
        // setTimeout(() => {

        resolve(getAsyncData());
        // }, 1000);
      } else {
        return [];
      }
    });

  const handleInputChange = (value: string, meta: any, name: string) => {
    if (meta.action === "input-change") {
      if (value.length >= 3) {
        setMenuOpen(true);
      } else {
        setMenuOpen(false);
      }

      setQuery(value);
    }

    props.onInputChange && props.onInputChange(value, meta, name);
  };

  const handleOptionSelect = (option: any, name) => {
    setTimeout(() => {
      setMenuOpen(() => {
        return false;
      });
      setQuery(option.label);
    }, 0);

    props.onChange && props.onChange(option, name);
  };

  return (
    <div className="select-wrapper autocomplete-wrapper">
      <Select
        {...props}
        asyncSelect={true}
        menuIsOpen={menuOpen}
        asyncSelectOptionsLoader={promiseOptions}
        onChange={handleOptionSelect}
        onInputChange={handleInputChange}
        inputValue={query}
      />
    </div>
  );
};
export default Autocomplete;
