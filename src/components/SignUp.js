import React, { useState } from "react";
import { useContext } from "react";
import { usersContext } from "./Users";
import { checkUsers } from "./Users";
import { NavLink } from "react-router-dom";

const SignUp = () => {
  let usersData = useContext(usersContext);
  let users = {};
  const [user, setUser] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [isSignedIn, setissigned] = useState(false);

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
    checkUsers();
    setissigned(true);
  };

  return (
    <div className="flex justify-center items-center mx-auto h-screen">
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <br />
        <input type="text" onChange={handleusername} required />
        <br />
        <label>firsname</label>
        <br />
        <input type="text" onChange={handleFname} required />
        <br />
        <label>lastname</label>
        <br />
        <input type="text" onChange={handlelname} required />
        <br />
        <label>email</label>
        <br />
        <input type="text" onChange={handleEmail} required />
        <br />
        <label>password</label>
        <br />
        <input type="text" onChange={handlepassword} required />
        <br />
        <NavLink to="/HomePage">
        <button type="submit" className="bg-green-500 p-4" disabled = {!isSignedIn}>
          Sign Up
        </button>
        </NavLink>
        
      </form>
    </div>
  );
};

export default SignUp;
