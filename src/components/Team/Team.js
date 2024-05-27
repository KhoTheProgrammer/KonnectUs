import React, { useState } from "react";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";
import { NavLink } from "react-router-dom";
import kho from "./IMG_0134.jpg";
import Eric from "./osato.jpg"
import Nduayhuoo from "./Nduayhuoo.jpg";
import daud from "./IMG_3900.jpg";
import solophina from "./WhatsApp Image 2024-05-26 at 15.14.19_631e642f.jpg";
import johnson from "./PXL_20220616_122041597-1.jpg"
import chimwemwe from "./chimmwepic.png"
const Team = () => {
  const [members, setmembers] = useState([
    {
      id: 1,
      name: "Solophina Mkandawire",
      price: "Group leader",
      market: "Developer",
      quantity: "Project Manager",
      image: solophina,
    },

    {
      id: 2,
      name: "Kondwani Padyera",
      price: "Group Member",
      market: "Developer",
      quantity: "Designer",
      image: kho,
    },

    {
      id: 3,
      name: "Johnson Kamanga",
      price: "Group Member",
      market: "Developer",
      quantity: "Designer",
      image: johnson,
    },
    {
      id: 4,
      name: "Chimwemwe Katenje",
      price: "Group Member",
      market: "Developer",
      quantity: "Designer",
      image: chimwemwe,
    },
    {
      id: 5,
      name: "Osman Daud",
      price: "Group Member",
      market: "Developer",
      quantity: "Designer",
      image: daud,
    },

    {
      id: 6,
      name: "Eric Sato",
      price: "Group Member",
      market: "Developer",
      quantity: "Designer",
      image: Eric,
    },

    {
      id: 7,
      name: "Roberto Bitah",
      price: "Group Member",
      market: "Developer",
      quantity: "Designer",
      image: Nduayhuoo,
    },
  ]);

  return (
    <div>
      <NavBar></NavBar>
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
            MEET OUR TEAM
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8">
            {members.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-md rounded-lg p-6 h-3/4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="mx-auto rounded-lg mb-4  h-1/2"
                />
                <h2 className="text-xl font-bold text-black mb-2">
                  {product.name}
                </h2>
                <p className=" text-black mb-2 text-lg">{product.price}</p>
                <p className=" text-black mb-4 text-lg">{product.market}</p>
                <p className=" text-black mb-2 text-lg">{product.quantity}</p>
                <NavLink to="/Messages">
                  <button className="bg-green-500 block m-auto text-white p-2 rounded-lg font-bold hover:bg-green-700">
                    CONTACT
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

export default Team;
