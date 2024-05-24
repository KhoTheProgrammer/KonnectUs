import Dashboard from "./Dashboard";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";
import { useState, useContext } from "react";
import Delete from "./Delete";
import Change from "./Change";
import { useNavigate } from "react-router";
import Create from "./Create";
import { userContext } from "../Users";



export default function AccountPage() {
  const {setSignedIn} = useContext(userContext);
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
      setSignedIn(false);
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
      </div>
      <Footer></Footer>
    </div>
  );
}
