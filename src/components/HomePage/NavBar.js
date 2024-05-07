export default function NavBar() {
  return (
    <div className="grid grid-cols-[1fr_3fr] p-3">
      <p className="font-bold text-5xl"> KonnectUs</p>
      <ul className="flex p-3 justify-end">
        <li className=" font-bold mx-6 text-lg hover:text-green-500">Home</li>
        <li className=" font-bold mx-6 text-lg hover:text-green-500">
          About Us
        </li>
        <li className=" font-bold mx-6 text-lg hover:text-green-500">
          Products
        </li>
        <li className=" font-bold mx-6 text-lg hover:text-green-500">Team</li>
        <li className=" font-bold mx-6 text-lg hover:text-green-500">
          Contact Us
        </li>
        <li className=" font-bold mx-6 text-lg hover:text-green-500">Login</li>
        <input
        type="search"
        placeholder="search"
        className=" border-[1px] border-black rounded-xl mx-6 text-center p-[2px]"
      ></input>
      </ul>
      
    </div>
  );
}
