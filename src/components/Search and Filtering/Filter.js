import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="p-2 py-1 h-9 border-black mb-6 ml-[470px] w-24 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg "
    >
      <option value="">Filter By</option>
      <option value="name">Name</option>
      <option value="price">Price</option>
      <option value="market">Location</option>
      <option value="quantity">Quantity</option>
    </select>
  );
};

export default Filter;
