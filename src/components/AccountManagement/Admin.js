import { useState } from "react";
import SideBar from "./SideBar";
import Users from "./Users";
import Change from "./Change";
import { useNavigate } from "react-router";
export default function Admin() {
  const navigate = useNavigate();
  const [click, setClick] = useState(1);

  function renders() {
    if (click === 1) {
      return <Users></Users>;
    } else if (click === 2) {
      return <Change></Change>;
    } else {
      navigate("/HomePage");
    }
  }
  return (
    <div className=" flex w-full">
      <SideBar click={click} setClick={setClick}></SideBar>
      {renders()}
    </div>
  );
}
