export default function Update() {
  return (
    <div className=" bg-[#392a05] p-4">
      <h2 className="text-center font-medium text-xl">UPDATE INFORMATION</h2>
      <form>
        <label className=" text-lg">Name</label> <br></br>
        <input
          type="text"
          placeholder="your name..."
          required
          className="p-1 w-full text-black"
        ></input>{" "}
        <br></br>
        <label className=" text-lg">Email</label> <br></br>
        <input
          type="email"
          placeholder="your email..."
          required
          className="p-1 w-full text-black"
        ></input>{" "}
        <br></br>
        <label className=" text-lg">Phone Number</label> <br></br>
        <input
          type="tel"
          placeholder="your phone number..."
          required
          className="p-1 w-full text-black"
        ></input>
        <button className="block m-auto bg-white mt-3 p-1 text-black font-bold">
          UPDATE
        </button>
      </form>
    </div>
  );
}
