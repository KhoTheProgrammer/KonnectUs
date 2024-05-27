import Dashboard from "./Dashboard";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";
import { useState, useContext, useEffect } from "react";
import Delete from "./Delete";
import Change from "./Change";
import { useNavigate } from "react-router";
import Create from "./Create";
import { userContext } from "../Users";

export default function AccountPage() {
  const { setSignedIn } = useContext(userContext);
  const navigate = useNavigate();
  const [clickValue, setClickValue] = useState(1);
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

  // Renders components dynamically
  function renders() {
    if (clickValue === 1) {
      return (
        <Create isSmallScreen={isSmallScreen} toggleMenu={toggleMenu}></Create>
      );
    } else if (clickValue === 2) {
      return (
        <Delete isSmallScreen={isSmallScreen} toggleMenu={toggleMenu}></Delete>
      );
    } else if (clickValue === 3) {
      return (
        <Change isSmallScreen={isSmallScreen} toggleMenu={toggleMenu}></Change>
      );
    } else {
      setSignedIn(false);
      navigate("/HomePage");
    }
  }

  return (
    <div className="h-full w-full">
      <NavBar></NavBar>
      <div className="flex">
        {(showMenu && isSmallScreen) || (
          <Dashboard
            clickValue={clickValue}
            setClickValue={setClickValue}
          ></Dashboard>
        )}
        {renders()}
      </div>
      <Footer></Footer>
    </div>
  );
}
