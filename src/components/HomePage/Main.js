import React from "react";


const Main = (props) => {
  const isSignedIn = props.isSignedIn;
  const setSignedIn = props.setSignedIn;

  return (
    <div
      className="bg-cover bg-center h-[615px] flex items-center justify-center py-3"
      style={{
        backgroundImage:
          "url(https://www.mowernew.com/wp-content/uploads/2023/07/pexels-gilmer-diaz-estela-6345502-1200x800.jpg)",
      }}
    >
      <div className="text-center text-white ">
        <h1 className="text-5xl font-bold  mt-[40%]">
          Welcome to <span className="text-green-500">K</span>onnect
          <span className="text-green-500">U</span>s
        </h1>

        <h2 className="text-4xl font-bold  mt-[1%]">Farmers Zone</h2>

        <h3 className="text-lg mt-[1%] m-0">
          Connect farmers and buyers effortlessly
        </h3>
        <button className="bg-green-500  hover:bg-green-400 text-white font-bold py-2 px-4 rounded-3xl mt-[20%]">
          Join Us Now
        </button>
      </div>
    </div>
  );
};

export default Main;
