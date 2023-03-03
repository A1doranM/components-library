import React, { useState } from "react";

import SelectInput, { SelectInputInterface } from "../Select/Select";

import "./autocomplete.scss";

export interface AutocompleteInterface
  extends Omit<SelectInputInterface, "options"> {
  client: {
    url: string;
    headers?: {};
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
        return data
          .slice(0, 50)
          .map((data) => ({ value: data.id, label: data.title }));
      });
  };

  const promiseOptions = (): any =>
    new Promise((resolve) => {
      // if (menuOpen) {
      //   setTimeout(() => {
      //     resolve(getAsyncData());
      //   }, 1000);
      // } else {
      //   return [];
      // }

      setTimeout(() => {
        resolve(getAsyncData());
      }, 1000);
    });

  const handleInputChange = (value: string, meta: any) => {
    // if (value.length >= 3) {
    //   console.log("Test");
    //   setMenuOpen(true);
    // }

    props.onInputChange && props.onInputChange(value, meta);
  };

  const handleOptionSelect = (option: string) => {
    // setMenuOpen(false);
    props.onChange(option);
  };

  return (
    <div className="select-wrapper">
      <SelectInput
        asyncSelect={true}
        // menuIsOpen={menuOpen}
        asyncSelectOptionsLoader={promiseOptions}
        onChange={handleOptionSelect}
        // onInputChange={handleInputChange}
        {...props}
      />
    </div>
  );
};

export default Autocomplete;
