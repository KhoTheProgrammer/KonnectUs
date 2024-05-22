import React from "react";
import Footer from "../HomePage/Footer";
import NavBar from "../HomePage/NavBar";

const ContactUs = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="bg-gray-300 h-screen flex justify-center items-center">
        <form className="bg-white md:w-1/2 md:h-3/4 p-6 rounded-lg">
          <h1 className="text-center md:text-4xl font-bold text-lg mb-4">
            CONTACT US
          </h1>
          <label className="font-bold">First Name</label>
          <br />
          <input type="text" className="w-full mb-4 rounded-md" />
          <br />
          <label className="font-bold">Last Name</label>
          <br />
          <input type="text" className="w-full mb-4 rounded-md" />
          <br />
          <label className="font-bold">Email</label>
          <br />
          <input type="email" className="w-full mb-4 rounded-md" />
          <br />
          <label className="font-bold">Phone Number</label>
          <br />
          <input type="tel" className="w-full mb-4 rounded-md" />
          <br />
          <label className="font-bold">Message</label>
          <br />
          <textarea className="w-full mb-8 rounded-md"></textarea>
          <br />
          <button
            type="submit"
            className="bg-green-500 block font-bold text-white m-auto p-4 rounded"
          >
            CONTACT
          </button>
        </form>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ContactUs;
