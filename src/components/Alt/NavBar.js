import KonnectUslogo from "./Konnect1.png";
import Search from "../Search and Filtering/Search";
import DropDown from "./DropDown"
import {useState} from "react"

const buttons = ["Home", "About Us", "Products", "Team", "Contact Us","Review"];

//function that will arrange the nav bar links/tabs in a list. Used as a callback to Array map()
const drawButtons = (button) => (
  <li key={button} className="font-bold mx-6 text-lg hover:text-green-500 py-1 cursor-pointer">
    {button}
  </li>
);

export default function NavBar(props) {
  //state variable to control my account dropdown
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);

  //state variables passed as props to this component
  const isSignedIn = props.isSignedIn;
  const setSignedIn = props.setSignedIn;

  return (
    <div className="grid grid-cols-[1fr_3fr] p-3 m-0 h-[80px]">
      <img
        src={KonnectUslogo}
        alt="KonnectUs Logo"
        className=" mb-4 h-14 w-[50]"
      />
      <ul className="flex p-3 justify-end">
        {buttons.map(drawButtons)}
        <li className="font-bold mx-6 text-lg hover:text-green-500 py-1 px-3 cursor-pointer">
          {isSignedIn ? (
            <button
              onClick={(e) => {
                //will add logic for dropdown bar later
                e.preventDefault();
                console.log("my account");
                setDropDownIsOpen(!dropDownIsOpen);
              }}
           className="hover:text-green-500" >
              My Account
              <DropDown isOpen = {dropDownIsOpen} />
            </button>
            
          ) : (
            "Login"
          )}
        </li>
        <li className="flex flex-col">
          
        </li>
        <Search />
      </ul>
    </div>
  );
}
