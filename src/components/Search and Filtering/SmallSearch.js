import React from 'react';

const SmallSearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search.."
      className="h-8 w-40 mt-0.1  ml-20 top-[-10px]   border-[1px] border-white rounded-xl text-center m-0"
    />
  );
};

export default SmallSearch;
