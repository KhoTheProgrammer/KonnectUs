import React, { useState } from "react";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";
import {NavLink} from "react-router-dom"

const ProductsPage = () => {
  const [products, setproducts] = useState([
    {
      id: 1,
      name: "Beans",
      price: "K1500",
      market: "Machinga",
      quantity: "1kg",
      image:
        "https://th.bing.com/th/id/OIP.NPA3NW4kQ3Ea0HC4ol99dgHaE8?rs=1&pid=ImgDetMain",
    },

    {
      id: 2,
      name: "Maizes",
      price: "K7000",
      market: "Zomba market",
      quantity: "50kg",
      image: "https://world-crops.com/wp-content/uploads/Corn-Maize-1.jpg",
    },

    {
      id: 3,
      name: "Potatoes",
      price: "k700",
      market: "Balaka martket",
      quantity: "50kg",
      image:
        "https://th.bing.com/th/id/OIP.ZC5AUtfnhnf5d1LuM6YBjgHaFk?w=1600&h=1205&rs=1&pid=ImgDetMain",
    },
    {
      id: 4,
      name: "Chicken",
      price: "K5000",
      market: "Balaka martket",
      quantity: "2kg",
      image:
        "https://th.bing.com/th/id/R.6bd670e04e3ad7a4d0ddcef1dca83c2e?rik=jfx%2b1LRSZZYfaQ&pid=ImgRaw&r=0",
    },
    {
      id: 5,
      name: "Beans",
      price: "k1500",
      market: "Machinga",
      quantity: "1000kg",
      image:
        "https://th.bing.com/th/id/OIP.NPA3NW4kQ3Ea0HC4ol99dgHaE8?rs=1&pid=ImgDetMain",
    },

    {
      id: 6,
      name: "Maizes",
      price: "k7000",
      market: "zomba market",
      quantity: "50kg",
      image: "https://world-crops.com/wp-content/uploads/Corn-Maize-1.jpg",
    },

    {
      id: 7,
      name: "potatoes",
      price: "k700",
      market: "Thyolo market",
      quantity: "50kg",
      image:
        "https://th.bing.com/th/id/OIP.ZC5AUtfnhnf5d1LuM6YBjgHaFk?w=1600&h=1205&rs=1&pid=ImgDetMain",
    },
    {
      id: 8,
      name: "chicken",
      price: "k5000",
      market: "Balaka martket",
      quantity: "2kg",
      image:
        "https://th.bing.com/th/id/R.6bd670e04e3ad7a4d0ddcef1dca83c2e?rik=jfx%2b1LRSZZYfaQ&pid=ImgRaw&r=0",
    },
    {
      id: 9,
      name: "Cassava",
      price: "k500",
      market: "Machinga",
      quantity: "100kg",
      image:
        "https://th.bing.com/th/id/OIP.NPA3NW4kQ3Ea0HC4ol99dgHaE8?rs=1&pid=ImgDetMain",
    },

    {
      id: 10,
      name: "Maizes",
      price: "k7000",
      market: "zomba market",
      quantity: "50kg",
      image: "https://world-crops.com/wp-content/uploads/Corn-Maize-1.jpg",
    },

    {
      id: 11,
      name: "Potatoes",
      price: "k700",
      market: "Balaka martket",
      quantity: "50kg",
      image:
        "https://th.bing.com/th/id/OIP.ZC5AUtfnhnf5d1LuM6YBjgHaFk?w=1600&h=1205&rs=1&pid=ImgDetMain",
    },
    {
      id: 12,
      name: "chicken",
      price: "k5000",
      market: "Balaka market",
      quantity: "28kg",
      image:
        "https://th.bing.com/th/id/R.6bd670e04e3ad7a4d0ddcef1dca83c2e?rik=jfx%2b1LRSZZYfaQ&pid=ImgRaw&r=0",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");

  const filteredProducts = products.filter((product) => {
    if (filter) {
      return  product[filter].toLowerCase().includes(searchTerm.toLowerCase());
    }
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.price.toLowerCase().includes(searchTerm.toLowerCase()) ||  
      product.market.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.quantity.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    < div>
      <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} isSignedIn={true} setSignedIn={() => {}} />
      <div className="w-full mx-auto px-4 py-8 bg-green-500">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl text-white font-bold text-center mb-8">
            PRODUCT CATALOGUE
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg p-6"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="mx-auto rounded-lg mb-4  h-1/2"
                />
                <h2 className="text-xl font-bold text-black mb-2">
                  {product.name}
                </h2>
                <p className=" text-black mb-2 text-lg">
                  <span className=" font-bold">Price: </span>
                  {product.price}
                </p>
                <p className=" text-black mb-4 text-lg">
                  <span className=" font-bold">Location: </span>
                  {product.market}
                </p>
                <p className=" text-black mb-2 text-lg">
                  <span className=" font-bold">Quantity: </span>
                  {product.quantity}
                </p>
                <NavLink to="/Messages">
                  <button className="bg-green-500 block m-auto text-white p-2 rounded-lg font-bold hover:bg-green-700">
                    BUY NOW
                  </button>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ProductsPage;
