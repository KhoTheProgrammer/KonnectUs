import React, { useState } from 'react'; 
function Search() {
  const [filterData, setFilterData] = useState([]); 

  const handleFilter = (value) => {
    if (value.trim() === '') {
      setFilterData([]); 
    } else {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => {
          const res = data.filter(f => 
            f.name.toLowerCase().includes(value.toLowerCase()) ||
            f.email.toLowerCase().includes(value.toLowerCase()) 
          );
          setFilterData(res); 
        })
        .catch(err => console.error(err));
    }
  };

  return (
    <div className="relative">
      <div className='search-top'>
        <input 
          type="text" 
          className=" h-10 mt-2 ml-[90px] border-[1px] border-black rounded-xl px-4 py-2  " 
          placeholder='Search here...' 
          onChange={e => handleFilter(e.target.value)} 
        />
      </div>

      
      <div className="   search-result border border-transparent bg-transparent absolute top-full left-0 mt-1 p-2 rounded-lg shadow-lg">
        {filterData.map((d, i) => (
          <div key={i} className="p-1">
            {d.name} - {d.email}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
