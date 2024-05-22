import React, { useState, useContext } from "react";
import { usersContext } from "./Users";
import { useNavigate } from "react-router-dom";
import Footer from "./HomePage/Footer";
import NavBar from "./HomePage/NavBar";

const SignUp = () => {
  const usersData = useContext(usersContext);
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const handleEmail = (e) => setEmail(e.target.value);
  const handleFname = (e) => setFname(e.target.value);
  const handleLname = (e) => setLname(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleUsername = (e) => setUser(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username: user,
      firstname: fname,
      lastname: lname,
      password: password,
      email: email,
    };
    usersData.push(newUser);
    navigate("/HomePage");
  };

  return (
    <div>
      <NavBar />
      <div className="bg-green-500 min-h-screen p-10">
        <div className="flex justify-center items-center mx-auto bg-white rounded-lg p-8 md:p-10 lg:p-12 max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">USERNAME</label>
              <input
                type="text"
                onChange={handleUsername}
                required
                placeholder="Enter your username"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">FIRST NAME</label>
              <input
                type="text"
                onChange={handleFname}
                required
                placeholder="Enter first name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">LAST NAME</label>
              <input
                type="text"
                onChange={handleLname}
                required
                placeholder="Enter last name"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">EMAIL</label>
              <input
                type="email"
                onChange={handleEmail}
                required
                placeholder="Enter your email"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2">PASSWORD</label>
              <input
                type="password"
                onChange={handlePassword}
                required
                placeholder="Enter your password"
                className="w-full p-2 border border-gray-300 rounded"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-green-500 mt-4 px-4 py-2 rounded-lg text-white hover:bg-green-600"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
