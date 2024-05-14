import React, { useState, useEffect } from "react";
import productsData from "./productsData"; // Assume productsData.js contains the products data

const ProductFilterAndSearch = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");

  useEffect(() => {
    setProducts(productsData.data);
    setFilteredProducts(productsData.data);
  }, []);

  const filterProduct = (category) => {
    setActiveFilter(category);
    if (category === "all") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const handleSearch = () => {
    const filtered = products.filter((product) =>
      product.productName.toUpperCase().includes(searchInput.toUpperCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <div className="wrapper">
      <div id="search-container" className="mb-4">
        <input
          type="search"
          id="search-input"
          placeholder="Search product name here.."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="bg-transparent w-40 border-b-2 border-black py-2 px-2 focus:border-blue-500"
        />
        <button
          id="search"
          onClick={handleSearch}
          className="py-2 px-4 ml-2 bg-blue-500 text-white rounded-md"
        >
          Search
        </button>
      </div>
      <div id="buttons" className="mb-4">
        <button
          className={`button-value ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => filterProduct("all")}
        >
          All
        </button>
        <button
          className={`button-value ${activeFilter === "Topwear" ? "active" : ""}`}
          onClick={() => filterProduct("Topwear")}
        >
          Topwear
        </button>
        <button
          className={`button-value ${activeFilter === "Bottomwear" ? "active" : ""}`}
          onClick={() => filterProduct("Bottomwear")}
        >
          Bottomwear
        </button>
        <button
          className={`button-value ${activeFilter === "Jacket" ? "active" : ""}`}
          onClick={() => filterProduct("Jacket")}
        >
          Jacket
        </button>
        <button
          className={`button-value ${activeFilter === "Watch" ? "active" : ""}`}
          onClick={() => filterProduct("Watch")}
        >
          Watch
        </button>
      </div>
      <div id="products" className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product, index) => (
          <div key={index} className={`card ${product.category}`}>
            <div className="image-container">
              <img src={product.image} alt={product.productName} className="max-w-full object-contain h-60" />
            </div>
            <div className="container">
              <h5 className="product-name">{product.productName.toUpperCase()}</h5>
              <h6>${product.price}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFilterAndSearch;
