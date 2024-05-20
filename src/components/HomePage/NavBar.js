import KonnectUslogo from "./Konnect1.png";
import KonnectUslogo from "./Konnect1.png";
import Search from "../Search and Filtering/Search";
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="grid grid-cols-[1fr_3fr] p-3 m-0 h-[80px]">
      <img
        src={KonnectUslogo}
        alt="KonnectUs Logo"
        className=" mb-4 h-14 w-[50]"
      />
      <img
        src={KonnectUslogo}
        alt="KonnectUs Logo"
        className=" mb-4 h-14 w-[50]"
      />
      <ul className="flex p-3 justify-end">
        <NavLink to="/HomePage">
          <li className=" font-bold mx-6 text-lg hover:text-green-500 py-1 cursor-pointer">
            Home
          </li>
        </NavLink>

        <NavLink to="/rateAndReview">
          <li className=" font-bold mx-6 text-lg hover:text-green-500 py-1 cursor-pointer">
            Rate and Reviews
          </li>
        </NavLink>
        <NavLink to="/ProductsPage">
          <li className=" font-bold mx-6 text-lg hover:text-green-500 py-1 cursor-pointer">
            Products
          </li>
        </NavLink>

        <NavLink to="/Team">
          <li className=" font-bold mx-6 text-lg hover:text-green-500 py-1 cursor-pointer">
            Team
          </li>
        </NavLink>
        <NavLink to="/Messages">
          <li className=" font-bold mx-6 text-lg hover:text-green-500 py-1 cursor-pointer">
            Messages
          </li>
        </NavLink>
        <NavLink to="/Login">
          <li className=" font-bold mx-6 text-lg hover:text-green-500 py-1 cursor-pointer">
            Login
          </li>
        </NavLink>

        <Search />
      </ul>
    </div>
  );
}
