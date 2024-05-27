import React, { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import { userContext } from "../Users";
import first from "./first.webp";
import second from "./second.webp";
import third from "./third.jpg";
import fourth from "./fourth.webp"
import fifth from "./fifth.jpg";

function Main() {
  const { isSignedIn } = useContext(userContext);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [first,
    second,
    third,
    fourth,
    fifth
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="bg-cover bg-center h-[615px] flex items-center justify-center py-3 transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      <div className="text-center text-white">
        <h1 className="text-5xl font-bold mt-[40%]">
          Welcome to <span className="text-green-500">K</span>onnect
          <span className="text-green-500">U</span>s
        </h1>

        <h2 className="text-4xl font-bold mt-[1%] italic">Farmers Zone</h2>

        <h3 className="text-2xl mt-[1%] m-0">
          Connect farmers and buyers effortlessly
        </h3>
        {!isSignedIn ? (
          <NavLink to="/Login">
            <button className="bg-green-500  hover:bg-green-400 text-white font-bold py-2 px-4 rounded-3xl mt-[20%]">
              Join Us Now
            </button>
          </NavLink>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
}

export default Main;
