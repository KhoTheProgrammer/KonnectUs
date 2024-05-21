export default function Update() {
  return (
    <div className=" bg-green-500 w-full px-24 py-16 rounded-2xl">
      <h2 className="text-center font-bold text-3xl text-white mb-8">CREATE PROFILE</h2>
      <form>
        <label className=" text-lg font-medium text-white">Name</label> <br></br>
        <input
          type="text"
          placeholder="your name..."
          required
          className="py-4 w-full text-white mb-8 px-2 rounded-lg"
        ></input>{" "}
        <br></br>
        <label className=" text-lg font-medium text-white">Email</label> <br></br>
        <input
          type="email"
          placeholder="your email..."
          required
          className="py-4 px-2 w-full  text-white mb-8 rounded-lg"
        ></input>{" "}
        <br></br>
        <label className=" text-lg font-medium text-white">Phone Number</label> <br></br>
        <input
          type="tel"
          placeholder="your phone number..."
          required
          className="py-4 w-full text-black px-2 mb-8 rounded-lg"
        ></input>
        <label className=" text-lg font-medium text-white">Date of birth</label><br></br>
        <input type="date" required
          className="py-4 w-full text-black px-2 mb-8 rounded-lg"/><br></br>
        <label className=" text-lg font-medium text-white">Bio</label><br></br> 
        <textarea required
          className="py-4 w-full text-black px-2 mb-8 rounded-lg" ></textarea>
        <button className="block m-auto bg-white mt-3 p-2 text-black font-bold rounded-lg">
          CREATE
        </button>
      </form>
    </div>
  );
}
