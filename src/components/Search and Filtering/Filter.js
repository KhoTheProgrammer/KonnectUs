import React from 'react';

const Filter = ({ filter, setFilter }) => {
  return (
    <select
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
      className="p-2 border rounded-xl"
    >
      <option value="">Filter by</option>
      <option value="name">Name</option>
      <option value="price">Price</option>
      <option value="market">Location</option>
      <option value="quantity">Quantity</option>
    </select>
  );
};

export default Filter;
