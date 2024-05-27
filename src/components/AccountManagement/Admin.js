import { useContext, useEffect, useState } from "react";
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
  const [showMenu, setShowMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1024);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    console.log(showMenu);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function renders() {
    if (click === 1) {
      return <Users isSmallScreen={isSmallScreen} toggleMenu={toggleMenu}></Users>;
    } else if (click === 2) {
      return <ReportRecords isSmallScreen={isSmallScreen} toggleMenu={toggleMenu}></ReportRecords>;
    } else {
      setSignedIn(false);
      navigate("/HomePage");
    }
  }
  return (
    <div>
      {}
      <NavBar></NavBar>
      <div className=" flex w-full">
        {(showMenu && isSmallScreen) || <SideBar click={click} setClick={setClick}></SideBar>}
        
        {renders()}
      </div>
      <Footer></Footer>
    </div>
  );
}
