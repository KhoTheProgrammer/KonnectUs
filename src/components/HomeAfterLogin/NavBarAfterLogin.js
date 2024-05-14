import KonnectUslogo from './Konnect1.png'
import Search from "../Search and Filtering/Search";
export default function NavBar() {
  return (
    <div className="grid grid-cols-[1fr_3fr] p-3 m-0 h-[80px]">
      <img src={KonnectUslogo} alt="KonnectUs Logo" className=" mb-4 h-14 w-[50]"  />
      <ul className="flex p-3 justify-end">
        <li className=" font-bold mx-6 text-lg hover:text-green-500 py-1 cursor-pointer">Home</li>
        <li className=" font-bold mx-6 text-lg hover:text-green-500 py-1 cursor-pointer">
          About Us
        </li>
        <li className=" font-bold mx-6 text-lg hover:text-green-500 py-1 cursor-pointer">
          Products
        </li>
        <li className=" font-bold mx-6 text-lg hover:text-green-500 py-1 cursor-pointer">Team</li>
        <li className=" font-bold mx-6 text-lg hover:text-green-500 py-1 cursor-pointer">
          Contact Us
        </li>
        <li className=" font-bold mx-6 text-lg hover:text-green-500 py-1 cursor-pointer">MyAcc</li>
        <Search/>
      </ul>
      
    </div>
  );
}
