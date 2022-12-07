import React from "react";
import cn from "classnames";

import SearchIcon from "src/assets/images/ui-icons/search.svg";

import "./search.scss";

export interface SearchInterface {
  className?: string;
}

const Search = ({ className = "" }: SearchInterface): JSX.Element => {
  return <img src={SearchIcon} alt="search" className={className} />;
};

export default Search;
