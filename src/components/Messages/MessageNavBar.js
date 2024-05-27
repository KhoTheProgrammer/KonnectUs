import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";
import { useContext, useState } from "react";
import { userContext } from "../Users";

export default function MessagesNavBar() {
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);
  const {farmerUsername} = useContext(userContext);

  return (
    <div className="flex flex-row justify-between h-[80px] text-white w-full md:w-[77%] bg-green-700 fixed top-0">
      <div className="flex flex-row w-[80%]">
        <div className="flex flex-row items-center ">
          <NavLink to="/Messages/Chats">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-14 h-14 p-2 rounded-full hover:bg-green-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </NavLink>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 md:w-16 h-10 md:h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>
        <div className=" p-2 pr-9">
          <button className="hover:bg-green-900 p-2 pr-[90px] text-2xl text-white rounded-xl flex items-center md:text-4xl">
            {farmerUsername}
          </button>
        </div>
      </div>
      <div
        onClick={(e) => {
          e.preventDefault();
          setDropDownIsOpen(!dropDownIsOpen);
        }}
        className=" p-2 w-[20%]"
      >
        {" "}
        <DropDown isOpen={dropDownIsOpen} />
      </div>
    </div>
  );
}
