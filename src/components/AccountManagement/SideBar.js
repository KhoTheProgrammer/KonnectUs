export default function SideBar({setClick, click}) {
  return (
    <div>
      <div className=" h-full bg-green-500 w-52">
        <div className=" p-4">
          <p className=" text-white font-bold mb-7 text-center text-xl">DASHBOARD</p>
          <p className={click === 1?"text-black font-bold border-b-2 mb-4 cursor-pointer":" text-white font-bold mb-4 cursor-pointer"} onClick={() => setClick(1)}>USERS</p>
          <p className={click === 2?" text-black font-bold border-b-2 mb-4 cursor-pointer":" text-white font-bold  mb-4 cursor-pointer"} onClick={() => setClick(2)}>REPORTS</p>
          <p className={click === 3? " text-black font-bold border-b-2 mb-4 cursor-pointer":" text-white font-bold mb-4 cursor-pointer"} onClick={() => setClick(3)}>LOGOUT</p>
        </div>
      </div>
    </div>
  );
}
