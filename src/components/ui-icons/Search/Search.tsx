import React from "react";

import SearchIcon from "../../../assets/images/ui-icons/search.svg";

import "./search.scss";

export interface SearchInterface {
  className?: string;
}

const Search = ({ className = "" }: SearchInterface): JSX.Element => {
  return <img src={SearchIcon} alt="search" className={className} />;
};

export default Search;
