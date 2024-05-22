//Search and Filtering/Search.js
import React from 'react';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search products.."
      className="h-8 mt-0.1 ml-[130px] border-[1px] border-black rounded-xl text-center m-0"
    />
  );
};

export default Search;
