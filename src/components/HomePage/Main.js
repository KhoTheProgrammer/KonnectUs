import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Main(props) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "https://www.mowernew.com/wp-content/uploads/2023/07/pexels-gilmer-diaz-estela-6345502-1200x800.jpg",
    "https://www.mowernew.com/wp-content/uploads/2023/07/pexels-erik-mclean-9229821-1200x800.jpg",
    
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // Change image every 10 seconds

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
        { !props.isSignedIn ? 
        (<NavLink to="/SignUp">
          <button className="bg-green-500  hover:bg-green-400 text-white font-bold py-2 px-4 rounded-3xl mt-[20%]">
            Join Us Now
          </button>
        </NavLink>)
        :
        <p>/*slideshow*/</p>
        }
      </div>
    </div>
  );
}

export default Main;
