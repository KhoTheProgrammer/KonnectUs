import React, { useState, useContext } from "react";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";
import { NavLink } from "react-router-dom";
import Filter from "../Search and Filtering/Filter";
import { userContext } from "../Users";
import { getChatID } from "../../FireBaseConfig";
import Search from "../Search and Filtering/Search";

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
      username: "Nduayhuoo",
      userid: "4ctpNUz6cPZVGmpl0x18DZTLTOm1",
    },

    {
      id: 2,
      name: "Maizes",
      price: "K7000",
      market: "Mzuzu market",
      quantity: "50kg",
      image: "https://world-crops.com/wp-content/uploads/Corn-Maize-1.jpg",
      username: "kondwani",
      userid: "BnTYYgKRMXaY7lbZtPiWyo6n4NX2",
    },

    {
      id: 3,
      name: "Potatoes",
      price: "k700",
      market: "Chitipa market",
      quantity: "50kg",
      image:
        "https://th.bing.com/th/id/OIP.ZC5AUtfnhnf5d1LuM6YBjgHaFk?w=1600&h=1205&rs=1&pid=ImgDetMain",
      username: "kondwani",
      userid: "BnTYYgKRMXaY7lbZtPiWyo6n4NX2",
    },
    {
      id: 4,
      name: "Chicken",
      price: "K5000",
      market: "Liwonde martket",
      quantity: "200kg",
      image:
        "https://th.bing.com/th/id/R.6bd670e04e3ad7a4d0ddcef1dca83c2e?rik=jfx%2b1LRSZZYfaQ&pid=ImgRaw&r=0",
      username: "chim",
      userid: "jrxauySBksMJTOe9eMM0W6PMqOH3",
    },
    {
      id: 5,
      name: "Tomato",
      price: "k1500",
      market: "machinga",
      quantity: "1000kg",
      image:
        "https://th.bing.com/th/id/OIF.j2xH2JsG6mtYDMLGcz1QYg?rs=1&pid=ImgDetMain",
      username: "chim",
      userid: "jrxauySBksMJTOe9eMM0W6PMqOH3",
    },

    {
      id: 6,
      name: "Onion",
      price: "k100",
      market: "zomba market",
      quantity: "550kg",
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/12/UC/JB/TH/106482549/onion-500x500.png",
      username: "RobertoBitah",
      userid: "XsM69Dw1lldaDx3JhKfbHjVD3oA3",
    },

    {
      id: 7,
      name: "Pumpkin",
      price: "k700",
      market: "Thylo market",
      quantity: "50kg",
      image:
        "https://th.bing.com/th/id/OIP.nSstYWPGnK2A1LJF3h_nVgHaE9?rs=1&pid=ImgDetMain",
      username: "RobertoBitah",
      userid: "XsM69Dw1lldaDx3JhKfbHjVD3oA3",
    },
    {
      id: 8,
      name: "Cows",
      price: "k50000",
      market: "Balaka market",
      quantity: "2000kg",
      image:
        "https://s-media-cache-ak0.pinimg.com/originals/bb/aa/79/bbaa795f950434c8537f6829813962c8.jpg",
      username: "johnson_kamanga",
      userid: "OQrVJQ6kANSWG3EsNDrSItRQDum2",
    },
    {
      id: 9,
      name: "Cassava",
      price: "k500",
      market: "machinga",
      quantity: "100kg",
      image:
        "https://th.bing.com/th/id/OIP.M0k-9tJAkEWRSBow1WxZYAHaEK?rs=1&pid=ImgDetMain",
      username: "johnson_kamanga",
      userid: "OQrVJQ6kANSWG3EsNDrSItRQDum2",
    },

    {
      id: 10,
      name: "Goats",
      price: "k40000",
      market: "zomba market",
      quantity: "1500kg",
      image:
        "https://th.bing.com/th/id/OIP.X8ckRhahEN70-vwlOqL3lAHaE8?w=5184&h=3456&rs=1&pid=ImgDetMain",
      username: "AJ",
      userid: "4tRFBUuzISbs4U6iGIKtloqRtY33",
    },

    {
      id: 11,
      name: "Chambo fish",
      price: "k700",
      market: "Lilongwe market",
      quantity: "50kg",
      image:
        "https://th.bing.com/th/id/R.a09ebd038a5afe4d284551407f3cf80a?rik=BJxDkDHwmF6nFw&riu=http%3a%2f%2fwww.faceofmalawi.com%2fwp-content%2fuploads%2f2014%2f10%2fOreochromis-karongae-chambo.jpg&ehk=uJNvUhsVEEsJ4bqrpkdbNHlru%2bewAhc%2fNaOQ9OxO1gQ%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
      username: "AJ",
      userid: "4tRFBUuzISbs4U6iGIKtloqRtY33",
    },
    {
      id: 12,
      name: "Pawpaw",
      price: "k5000",
      market: "Balaka martket",
      quantity: "28kg",
      image:
        "https://th.bing.com/th/id/OIP.C2dQ4im8zSEBw-t9stoIWQHaD8?rs=1&pid=ImgDetMain",
      username: "Osato",
      userid: "S1rgQWy6Amb36Zb3w7RQw8mA7I23",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("");


  const { setFarmerID, setFarmerUsername, chatID, setChatID } =
    useContext(userContext);

  const filteredProducts = products.filter((product) => {
    if (filter) {
      return product[filter].toLowerCase().includes(searchTerm.toLowerCase());
    }
    return (
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.price.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.market.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.quantity.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });


  return (
    <div>
      <NavBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} isSignedIn={true} setSignedIn={() => { }} />
      <div
        className="w-full mx-auto px-4 py-8 bg-green-500"
      // style={{
      //   backgroundImage:
      //     'url("https://www.ashwameghagri.com/images/event_3.jpg")',
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      // }}
      >
        <div className="container mx-auto px-4 py-8">

          <h1 className="text-3xl text-white font-bold text-center mb-8">
            PRODUCT CATALOGUE
          </h1>

          <div className="flex flex-col md:flex-row items-center justify-center md:space-x-0 space-y-1 md:space-y-0 w-full">
            <div className="flex justify-center">
              <Filter filter={filter} setFilter={setFilter} />
            </div>
            <div className="flex justify-center">
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg p-6"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="mx-auto rounded-lg mb-4 h-1/2"
                />
                <h2 className="text-xl font-bold text-black mb-2">
                  {product.name}
                </h2>
                <p className="text-black mb-2 text-lg">
                  <span className="font-bold">Price: </span>
                  {product.price}
                </p>
                <p className="text-black mb-4 text-lg">
                  <span className="font-bold">Location: </span>
                  {product.market}
                </p>
                <p className="text-black mb-2 text-lg">
                  <span className="font-bold">Quantity: </span>
                  {product.quantity}
                </p>
                <NavLink to="/Messages/Messages">
                  <button
                    onClick={(event) => {
                      setFarmerID(product.userid);
                      setFarmerUsername(product.username);
                      setChatID(getChatID(product.userid));
                      console.log(
                        `set farmerid to ${product.userid} and farmerusername to ${product.username} and chatid to ${chatID} `
                      );
                      console.log(`chatID call: ${getChatID(product.userid)}`);
                    }}
                    className="bg-green-500 block m-auto text-white p-2 rounded-lg font-bold hover:bg-green-700"
                  >
                    ENQUIRE
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
