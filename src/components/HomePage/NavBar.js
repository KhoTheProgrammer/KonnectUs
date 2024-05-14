<<<<<<< HEAD
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


import KonnectUslogo from './Konnect1.png'
import Search from "../Search and Filtering/Search";
export default function NavBar() {
  return ( 
   <Router>
=======
import KonnectUslogo from "./Konnect1.png";
import Search from "../Search and Filtering/Search";

const buttons = ["Home", "About Us", "Products", "Team", "Contact Us"];

const drawButtons = (button) => (
  <li className="font-bold mx-6 text-lg hover:text-green-500 py-1 cursor-pointer">
    {button}
  </li>
);

export default function NavBar(props) {
  const isSignedIn = props.isSignedIn;
  const setSignedIn = props.setSignedIn;

  return (
>>>>>>> 76374e2ca32b00f56d08771bc2b39d43a332d1f2
    <div className="grid grid-cols-[1fr_3fr] p-3 m-0 h-[80px]">
      <img
        src={KonnectUslogo}
        alt="KonnectUs Logo"
        className=" mb-4 h-14 w-[50]"
      />
      <ul className="flex p-3 justify-end">
        {buttons.map(drawButtons)}
        <li className="font-bold mx-6 text-lg hover:text-green-500 py-1 cursor-pointer">
          {isSignedIn ? "My Account" : "Login"}
        </li>
        <Search />
      </ul>
    </div>
    </Router>
  );
}
