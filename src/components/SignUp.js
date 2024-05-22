import React, { useState } from "react";
import { useContext } from "react";
import { usersContext } from "./Users";
//import { checkUsers } from "./Users";
import { useNavigate } from "react-router-dom";
import Footer from "./HomePage/Footer";
import NavBar from "./HomePage/NavBar";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "./Users"

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

    createUserWithEmailAndPassword(auth, email, password)
    .then(
      (userCredentials) => {
        console.log(userCredentials);
      }
    )
    .catch(
      (error) => console.log(error)
    )

    usersData.push(users);
    navigate("/HomePage");
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className=" bg-green-500 h-[700px] p-[40px]">
        <div className="flex justify-center items-center mx-auto bg-white rounded-[40px]  h-[500px] w-[600px] mt-[80px]">
          <form onSubmit={handleSubmit}>
            <label>USERNAME</label>
            <br />
            <input
              type="text"
              onChange={handleusername}
              required
              placeholder="Enter you user name"
            />
            <br />
            <label>FIRST NAME</label>
            <br />
            <input
              type="text"
              onChange={handleFname}
              required
              placeholder="Enter first name "
            />
            <br />
            <label>LAST NAME</label>
            <br />
            <input
              type="text"
              onChange={handlelname}
              required
              placeholder="Enter last name"
            />
            <br />
            <label>EMAIL</label>
            <br />
            <input
              type="text"
              onChange={handleEmail}
              required
              placeholder="Enter your email"
            />
            <br />
            <label>PASSWORD</label>
            <br />
            <input
              type="text"
              onChange={handlepassword}
              required
              placeholder="Enter your password"
            />
            <br />
            <button type="submit" className="bg-green-500 mt-[20px] rounded-lg h-8 w-[100px] text-white border-amber-100">
              Sign Up
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default SignUp;
