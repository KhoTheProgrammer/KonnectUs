import logo from "./logo.jpg";

export default function NavBar() {
  return (
    <div className="grid grid-cols-[1fr_3fr] p-5">
      <p className="font-bold text-5xl"> KonnectUs</p>
      <ul className="flex mx-4 p-3">
      <li className=" font-bold mx-6 text-lg hover:text-green-500">Home</li>
        <li className=" font-bold mx-6 text-lg hover:text-green-500">About Us</li>
        <li className=" font-bold mx-6 text-lg hover:text-green-500">Products</li>
        <li className=" font-bold mx-6 text-lg hover:text-green-500">Team</li>
        <li className=" font-bold mx-6 text-lg hover:text-green-500">Contact Us</li>
        <li className=" font-bold mx-6 text-lg hover:text-green-500">Login</li>
      </ul>
      <input
        type="search"
        placeholder="search"
        className=" h-10 mt-2 ml-[90px] border-[1px] border-black text-center rounded-xl mx-6 "
      ></input>
    </div>
  );
}
