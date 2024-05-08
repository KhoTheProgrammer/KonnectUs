import logo from "./logo.jpg";
import Search from "../../Search";

export default function NavBar() {
  return (
    <div className="flex p-5">
      <p className="font-bold text-5xl mr-[8%]"> KonnectUs</p>
      <div className="flex">
        <ul className="flex mx-4 p-3">
          <li className=" mx-5 font-bold">Home</li>
          <li className=" mx-5 font-bold">About Us</li>
          <li className=" mx-5 font-bold">Products</li>
          <li className=" mx-5 font-bold">Team</li>
          <li className=" mx-5 font-bold">Contact Us</li>
          <li className=" mx-5 font-bold">Login</li>
        </ul>
        <Search/>
      </div>
    </div>
  );
}
