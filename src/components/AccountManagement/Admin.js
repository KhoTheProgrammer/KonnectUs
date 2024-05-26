import { useContext, useState } from "react";
import SideBar from "./SideBar";
import Users from "./Users";
import { useNavigate } from "react-router";
import ReportRecords from "../AccountReporting/ReportRecords";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";
import { userContext } from "../Users";

export default function Admin() {
  const navigate = useNavigate();
  const [click, setClick] = useState(1);
  const { setSignedIn } = useContext(userContext);

  function renders() {
    if (click === 1) {
      return <Users></Users>;
    } else if (click === 2) {
      return <ReportRecords></ReportRecords>;
    } else {
      setSignedIn(false);
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
