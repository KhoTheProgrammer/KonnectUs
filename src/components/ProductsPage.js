import React, { useState } from "react";

const ProductsPage = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: "Beans",
            price: "k50",
            market: "machinga",
            quantity:"50kg",
            image: "https://th.bing.com/th/id/OIP.NPA3NW4kQ3Ea0HC4ol99dgHaE8?rs=1&pid=ImgDetMain",
        },

        {
            id: 2,
            name: "Maizes",
            price: "k70",
            market: "zomba market",
            quantity:"50kg",
            image: "https://world-crops.com/wp-content/uploads/Corn-Maize-1.jpg",
        },

        {
            id: 3,
            name: "potatoes",
            price: "k700",
            market: "Balaka martket",
            quantity:"50kg",
            image: "https://th.bing.com/th/id/OIP.ZC5AUtfnhnf5d1LuM6YBjgHaFk?w=1600&h=1205&rs=1&pid=ImgDetMain",
        },
        {
            id: 4,
            name: "chicken",
            price: "k5000",
            market: "Balaka martket",
            quantity:"2kg",
            image: "https://th.bing.com/th/id/R.6bd670e04e3ad7a4d0ddcef1dca83c2e?rik=jfx%2b1LRSZZYfaQ&pid=ImgRaw&r=0",
        },
    ]);

    return (
<div className="container mx-auto px-4 py-8" style={{ backgroundImage: 'url("https://www.ashwameghagri.com/images/event_3.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl text-white font-bold text-center mb-8">PRODUCT CATALOGUE</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {products.map((product) => (
                    <div key={product.id} className="bg-white shadow-md rounded-lg p-6">
                        <img src={product.image} alt={product.name} className="mx-auto w-32 h-32 rounded-full mb-4" />
                        <h2 className="text-xl font-semibold text-green-800 mb-2">{product.name}</h2>
                        <p className=" text-green-800 mb-2">{product.price}</p>
                        <p className=" text-green-800 mb-4">{product.market}</p>
                        <p className=" text-green-800 mb-2">{product.quantity}</p>
                    </div>
                ))}
            </div>
        </div>
        </div>
    );
};

export default ProductsPage;