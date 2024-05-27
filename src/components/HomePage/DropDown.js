import { NavLink } from "react-router-dom";

export default function DropDown(props) {
  //state variable passed as a prop to this component
  const isOpen = props.isOpen;

  return (
    <div className=" sm:mt-18  absolute font-bold bg-white rounded-b-lg ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className=" sm:ml-3 w-6 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>

      {isOpen && (
        <ul className="flex flex-col p-3  ">
          <NavLink to="/product listing/Product">
            <li className=" cursor-pointer text-black hover:text-green-500">
              Post
            </li>
          </NavLink>
          <NavLink to="/Messages/Chats">
            <li className=" cursor-pointer text-black hover:text-green-500">
              {" "}
              Messages
            </li>
          </NavLink>
          <NavLink to="/AccountManagement/AccountPage">
            <li className=" cursor-pointer text-black hover:text-green-500">
              Manage Account
            </li>
          </NavLink>
        </ul>
      )}
    </div>
  );
}
