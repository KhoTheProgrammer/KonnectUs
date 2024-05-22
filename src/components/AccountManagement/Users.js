export default function Users() {
  return (
    <div className=" p-4 w-full">
      <div className=" flex">
        <h2 className=" text-xl font-bold mb-8">Users (10)</h2>
        <p className="text-xl font-bold mb-8 float-right ml-auto">Add User</p>
      </div>

      <div className=" border-solid border grid grid-cols-4 p-4">
        <div className=" mb-3 font-">
          <h3 className=" font-bold text-xl">USERNAME</h3>
        </div>
        <div className=" mb-3 font-">
          <h3 className=" font-bold text-xl">FIRST NAME</h3>
        </div>
        <div className=" mb-3 font-">
          <h3 className=" font-bold text-xl">LAST NAME</h3>
        </div>
        <div className=" mb-3 font-">
          <h3 className=" font-bold text-xl">EMAIL</h3>
        </div>
        <div className=" mb-3 font-">
          <h3>Khotheprogrammer</h3>
        </div>
        <div className=" mb-3 font-">
          <h3>Kondwani</h3>
        </div>
        <div className=" mb-3 font-">
          <h3>Padyera</h3>
        </div>
        <div className=" mb-3 font-">
          <h3>kondwanipadyera@gmail.com</h3>
        </div>
      </div>
    </div>
  );
}
