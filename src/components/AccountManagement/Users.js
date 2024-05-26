import React, { useEffect, useState, useContext} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { userContext } from "../Users";
import { auth } from "../../FireBaseConfig";

export default function Users({isSmallScreen, toggleMenu}) {
  const {userData} = useContext(userContext)
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();
  // useEffect(() => {
  //   const url = "/Users.json";
  //   fetch(url)
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok " + response.statusText);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setUsers(data.Users);
  //       console.log("Parsed JSON data:", data.Users);
  //     })
  //     .catch((error) =>
  //       console.error("Error fetching or parsing JSON:", error)
  //     );
  // }, []);

  // Function to handle option icon click
  const handleOptionClick = (user) => {
    setSelectedUser(user);
  };

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    if (option === "Edit"){
      navigate("/AccountManagement/AccountPage")
    }
    // Perform the desired action based on the selected option
    setSelectedUser(null); // Reset the selected user after handling the option
  };

  return (
    <div className="lg:w-full w-screen lg:p-8 md:p-4 p-2 min-h-screen h-auto">
      <div className="flex justify-between lg:justify-normal">
        {isSmallScreen && <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={toggleMenu}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>}
      
        <h2 className="text-xl font-bold mb-8">Users ({userData.length})</h2>
        <NavLink to="/Signup" className="lg:ml-auto">
          <div className=" flex">
            <svg
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className=" h-7"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
              ></path>
            </svg>
            <p className="text-xl font-bold mb-8 flex">Add User</p>
          </div>
        </NavLink>
      </div>
      <div className="border-solid border grid grid-cols-4 lg:p-4 p-2 bg-green-500">
        <div className="mb-3">
          <h3 className="font-bold lg:text-xl md:text-base text-sm sm:uppercase text-white">Username</h3>
        </div>
        <div className="mb-3">
          <h3 className="font-bold lg:text-xl md:text-base text-sm sm:uppercase text-white">First Name</h3>
        </div>
        <div className="mb-3">
          <h3 className="font-bold lg:text-xl md:text-base text-sm sm:uppercase text-white">Last Name</h3>
        </div>
        <div className="mb-3">
          <h3 className="font-bold lg:text-xl md:text-base text-sm sm:uppercase text-white">Email</h3>
        </div>
      </div>
      {userData.map((user) => (
        <div key={user.uid} className="mb-3 border-solid border grid grid-cols-4 p-4 hover:bg-green-500">
          <h3>{user.username}</h3>
          <h3>{user.fname}</h3>
          <h3>{user.lname}</h3>
          <div className=" flex">
            <h3>{user.userid} </h3>
            <svg
              data-slot="icon"
              fill="none"
              stroke-width="1.5"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className=" h-8 inline-block ml-auto cursor-pointer"
              onClick={() => handleOptionClick(user)}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
              ></path>
            </svg>
          </div>
          {selectedUser === user && (
            <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-white p-8 rounded-lg">
                <h2 className="text-xl font-bold mb-4">Options</h2>
                <button
                  className="block w-full py-2 px-4 bg-green-500 text-white rounded mb-2"
                  onClick={() => handleOptionSelect("Edit")}
                >
                  Edit
                </button>
                <button
                  className="block w-full py-2 px-4 bg-red-500 text-white rounded"
                  onClick={() => handleOptionSelect("Delete")}
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}