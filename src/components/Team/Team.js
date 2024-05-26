import React, { useState } from "react";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";
import { NavLink } from "react-router-dom";
import kho from "./IMG_0134.jpg"
import eric from "./IMG_9799.jpg"
import Nduayhuoo from "./Nduayhuoo.jpg"
import chimwemwe from "./chimmwepic.png"

const Team = () => {
  const [members, setmembers] = useState([
    {
      id: 1,
      name: "Solophina Mkandawire",
      price: "Group leader",
      market: "Developer",
      quantity: "Project Manager",
      image: chimwemwe,
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
      image:
        "https://scontent.fllw1-1.fna.fbcdn.net/v/t39.30808-6/295916765_1798159527212334_8349121538674233371_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFs0wlj4hxnriOqaH5orq7FNFDRf-excY80UNF_57Fxj1Z8S0m_U5f-1GTSrswLQtTJVaPampF7aRKVjLa0lsUD&_nc_ohc=sfl8NauZPIgQ7kNvgEa-iWP&_nc_zt=23&_nc_ht=scontent.fllw1-1.fna&oh=00_AYDAbu1PV867TbZQzj08TIGQaWlxjK9rsaZyUH9Kyr0zNQ&oe=664C1449",
    },
    {
      id: 4,
      name: "Chimwemwe Katenje",
      price: "Group Member",
      market: "Developer",
      quantity: "Designer",
      image:chimwemwe,
    },
    {
      id: 5,
      name: "Osman Daud",
      price: "Group Member",
      market: "Developer",
      quantity: "Designer",
      image:
        "https://scontent.fllw1-1.fna.fbcdn.net/v/t39.30808-6/428598318_2714192982062896_5635226273016430478_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFa5yKlaAWDtZ4HH_WYE8xjLk57hP-PuzMuTnuE_4-7MyaKk4cBz76K4iiXEPaApdwblWJ8kfnFlHFhwB1tNtx1&_nc_ohc=hNEi74n9bxkQ7kNvgHy7_cP&_nc_zt=23&_nc_ht=scontent.fllw1-1.fna&oh=00_AYB-yu_VmaYeKee8KbDqnqO-XNBW4Mjj-lyEP42Arfo6Hg&oe=664C2D76",
    },

    {
      id: 6,
      name: "Eric Sato",
      price: "Group Member",
      market: "Developer",
      quantity: "Designer",
      image: eric,
    },

    {
      id: 7,
      name: "Roberto Bitah",
      price: "Group Member",
      market: "Developer",
      quantity: "Designer",
      image: Nduayhuoo,
    }
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
                <p className=" text-black mb-2 text-lg">
                  {product.price}
                </p>
                <p className=" text-black mb-4 text-lg">
                  {product.market}
                </p>
                <p className=" text-black mb-2 text-lg">
                  {product.quantity}
                </p>
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
