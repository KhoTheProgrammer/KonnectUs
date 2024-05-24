import { useState } from "react";
import SideBar from "./SideBar";
import Users from "./Users";
import { useNavigate } from "react-router";
import ReportRecords from "../AccountReporting/ReportRecords";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";
export default function Admin() {
  const navigate = useNavigate();
  const [click, setClick] = useState(1);

  function renders() {
    if (click === 1) {
      return <Users></Users>;
    } else if (click === 2) {
      return <ReportRecords></ReportRecords>;
    } else {
      navigate("/HomePage");
    }
  }
  return (
    <div>
      <NavBar></NavBar>
      <div className=" flex w-full">
        <SideBar click={click} setClick={setClick}></SideBar>
        {renders()}
      </div>
      <Footer></Footer>
    </div>
  );
}
