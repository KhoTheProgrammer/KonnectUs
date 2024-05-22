<<<<<<< HEAD
import Delete from "./Delete";
import {useState} from "react";
import Dashboard from "./Dashboard"

export default function AccountPage() {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  return (
    <div>
      <div className="flex gap-4 justify-between text-white ">
        <Dashboard></Dashboard>
        <div className=" w-1/2">
          <Delete password ={password} setPassword={setPassword} newPassword={newPassword} setNewPassword={setNewPassword}/>
        </div>
        <div></div>
=======
import Dashboard from "./Dashboard";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";
import { useState } from "react";
import Delete from "./Delete";
import Change from "./Change";
import { useNavigate } from "react-router";
import Create from "./Create";

export default function AccountPage() {
  const navigate = useNavigate();
  const [clickValue, setClickValue] = useState(1);

  // Renders components dynamically
  function renders() {
    if (clickValue === 1) {
      return <Create></Create>;
    } else if (clickValue === 2) {
      return <Delete></Delete>;
    } else if (clickValue === 3) {
      return <Change></Change>;
    } else {
      navigate("/HomePage");
    }
  }

  return (
    <div className="h-full w-full">
      <NavBar></NavBar>
      <div className="flex">
        <Dashboard
          clickValue={clickValue}
          setClickValue={setClickValue}
        ></Dashboard>
        {renders()}
>>>>>>> 0ab091799cd209d395fb9ec07eeb53cd2d4f7ec1
      </div>
      <Footer></Footer>
    </div>
  );
}
