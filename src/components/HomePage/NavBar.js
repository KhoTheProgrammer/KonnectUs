import React, { useState, useContext, useEffect } from "react";
import KonnectUslogo from "./Konnect1.png";
import { NavLink} from "react-router-dom";
import DropDown from "./DropDown";
import { userContext } from "../Users";

export default function NavBar() {
  const { isSignedIn } = useContext(userContext);
  const [showDropDown, setShowDropDown] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const buttons = [
    { name: "Home", link: "/HomePage" },
    { name: "About Us", link: "/AboutUs/AboutUs" },
    { name: "Products", link: "/product listing/ProductsPage" },
    { name: "Team", link: "/Team" },
    { name: "Reviews", link: "/RatingAndReviews/ReviewsPage" },
    { name: "Contact Us", link: "/ContactUs" },
  ];

  const mapButtons = (button) => (
    <li
      key={button.name}
      className="font-bold h-6 mx-4 text-[15px] hover:text-green-500 py-1 cursor-pointer "
    >
      <NavLink className={({ isActive }) => (isActive ? ' text-yellow-400' : 'text-black')} to={button.link} >{button.name} </NavLink>

    </li>
  );

  return (
    <div className="grid grid-cols-[1fr_3fr] p-3 m-0 h-[80px] relative z-30">
      <img
        src={KonnectUslogo}
        alt="KonnectUs Logo"
        className="mb-4 h-14 w-50"
      />

      <div className="flex justify-end items-center">
        {isSmallScreen && (
          <div
            className="block lg:hidden top-6 right-3 absolute cursor-pointer"
            onClick={toggleMenu}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
        )}

        <ul
          className={`${isSmallScreen ? (showMenu ? "block" : "hidden") : "flex"
            } lg:flex bg-white rounded-xl lg:justify-end lg:items-center`}
        >
          {buttons.map(mapButtons)}
          {isSignedIn ? (
            <li
              onClick={(e) => {
                e.preventDefault();
                setShowDropDown(!showDropDown);
              }}
              className="font-bold mx-6 text-lg hover:text-green-500 py-1 cursor-pointer"
            >
              <DropDown isOpen={showDropDown} />
            </li>
          ) : (
            <NavLink to="/Login" className={({ isActive }) => (isActive ? 'text-yellow-400' : 'text-black')}>
              <li className="font-bold mx-6 mt-1 text-[15px] relative z-10 hover:text-green-500 py-1 cursor-pointer">
                Login
              </li>
            </NavLink>

          )}

          <li className="opacity-0">-----------</li>

        </ul>
      </div>
    </div>
  );
}
