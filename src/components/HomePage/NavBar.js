
import React, { useState } from 'react';
import KonnectUslogo from "./Konnect1.png";
import Search from "../Alt/Search"; 
import { NavLink, useLocation } from "react-router-dom";
import DropDown from './DropDown';

export default function NavBar({ isSignedIn, setSignedIn, searchTerm, setSearchTerm }) {
  const [showDropDown, setShowDropDown] = useState(false);

  const buttons = [
    {
      name: "Home",
      link: "/HomePage"
    },
    {
      name: "About Us",
      link: "/AboutUs/AboutUs"
    },
    {
      name: "Products",
      link: "/ProductsPage"
    },
    {
      name: "Team",
      link: "/Team"
    },
    {
      name: "Reviews",
      link: "/RateAndReview/ReviewRating"
    }
  ]

  const mapButtons = (button) => (
    <NavLink to={button.link}>
    <li key={button.name} className=" font-bold mx-6 text-lg hover:text-green-500 py-1 cursor-pointer">
      {button.name}
    </li>
  </NavLink>)
  

  return (
    <div className="grid grid-cols-[1fr_3fr] p-3 m-0 h-[80px]">
      <img src={KonnectUslogo} alt="KonnectUs Logo" className="mb-4 h-14 w-[50]" />
      <ul className="flex p-3 justify-center">
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
          <NavLink to="/Login">
            <li className="font-bold mx-6 text-lg hover:text-green-500 py-1 cursor-pointer">
              Login
            </li>
          </NavLink>
        )}
       {window.location.pathname === '/ProductsPage' && <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />}
      </ul>
      
    </div>
  );
}
