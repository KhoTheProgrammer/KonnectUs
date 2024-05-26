import React from 'react';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search products.."
      className="h-9 mb-6 border-[1px]  text-center w-[210px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-0"
    />
  );
};

export default Search;
