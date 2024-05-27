import React from "react";
import { NavLink } from "react-router-dom";

const Four04 = () => {
  return (
    <div className=" bg-white flex justify-center h-screen items-center">
      <div className="bg-gray-300 p-16 rounded-lg md:m-0 m-16">
        <div className="">
          <h1 className="text-5xl mb-4 font-bold">404</h1>
          <h1 className="sm:text-4xl text-xl text-gray-600">Sorry we couldn't find this page.</h1>
          <h1 className=" mb-4 sm:text-xl text-base">
            But dont worry, you can find plenty of other things on our homepage
          </h1>
          <NavLink to="/HomePage">
          <button className=" bg-green-500 p-2 rounded-lg text-white font-bold underline">Back to Homepage</button>
          </NavLink>
          
        </div>
      </div>
    </div>
  );
};

export default Four04;
