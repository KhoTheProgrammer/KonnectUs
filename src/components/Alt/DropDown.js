export default function DropDown(props) {
  
  //state variable passed as a prop to this component
  const isOpen = props.isOpen;
  
  return (
    <div className="h-full font-bold bg-white rounded-b-lg">
      {isOpen && (
        <ul className="flex flex-col p-3  ">
          <li className=" cursor-pointer text-black hover:text-green-500">Post</li>
          <li className=" cursor-pointer text-black hover:text-green-500"> Messages</li>
          <li className=" cursor-pointer text-black hover:text-green-500">Manage Account</li>
        </ul>
      )}
    </div>
  );
}
