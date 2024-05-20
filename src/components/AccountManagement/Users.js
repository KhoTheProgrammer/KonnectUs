import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = "/Users.json";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setUsers(data.Users);
        console.log("Parsed JSON data:", data.Users);
      })
      .catch((error) =>
        console.error("Error fetching or parsing JSON:", error)
      );
  }, []); // Empty dependency array means this useEffect runs once after the initial render

  return (
    <div className="w-full p-8">
      <div className="flex">
        <h2 className="text-xl font-bold mb-8">Users ({users.length})</h2>
        <NavLink to="/Login" className="ml-auto">
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

      <div className="border-solid border grid grid-cols-4 p-4 bg-green-500">
        <div className="mb-3">
          <h3 className="font-bold text-xl text-white">USERNAME</h3>
        </div>
        <div className="mb-3">
          <h3 className="font-bold text-xl text-white">FIRST NAME</h3>
        </div>
        <div className="mb-3">
          <h3 className="font-bold text-xl text-white">LAST NAME</h3>
        </div>
        <div className="mb-3">
          <h3 className="font-bold text-xl text-white">EMAIL</h3> 
        </div>
      </div>

      {users.map((user, index) => (
        <div
          key={index}
          className="mb-3 border-solid border grid grid-cols-4 p-4 hover:bg-green-500"
        >
          <h3>{user.username}</h3>
          <h3>{user.firstname}</h3>
          <h3>{user.lastname}</h3>
          <div className=" flex">
            <h3>{user.email} </h3>
            <NavLink to="/Home" className="ml-auto">
              <svg
                data-slot="icon"
                fill="none"
                stroke-width="1.5"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className=" h-8 inline-block ml-auto"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                ></path>
              </svg>
            </NavLink>
          </div>
        </div>
      ))}
    </div>
  );
}
