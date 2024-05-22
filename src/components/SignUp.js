import React, { useState } from "react";
import { useContext } from "react";
import { usersContext } from "./Users";
import { checkUsers } from "./Users";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  let usersData = useContext(usersContext);
  const navigate = useNavigate();
  let users = {};
  const [user, setUser] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");

  const handleEmail = (e) => {
    setemail(e.target.value);
  };

  const handleFname = (e) => {
    setfname(e.target.value);
  };

  const handlelname = (e) => {
    setlname(e.target.value);
  };

  const handlepassword = (e) => {
    setpassword(e.target.value);
  };

  const handleusername = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    users = {
      username: user,
      firstname: fname,
      lastname: lname,
      password: password,
      email: email,
    };
    usersData.push(users);
    navigate("/HomePage");
  };

  return (
    <div className="flex justify-center items-center mx-auto h-screen">
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <br />
        <input type="text" onChange={handleusername} required placeholder="Enter you user name" />
        <br />
        <label>first name</label>
        <br />
        <input type="text" onChange={handleFname} required placeholder="Enter first name " />
        <br />
        <label>lastname</label>
        <br />
        <input type="text" onChange={handlelname} required placeholder="Enter last name" />
        <br />
        <label>email</label>
        <br />
        <input type="text" onChange={handleEmail} required placeholder="Enter your email" />
        <br />
        <label>password</label>
        <br />
        <input type="text" onChange={handlepassword} required placeholder="Enter your password" />
        <br />
        <button
          type="submit"
          className="bg-green-500 p-4"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
