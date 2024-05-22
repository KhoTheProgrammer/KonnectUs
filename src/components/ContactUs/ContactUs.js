import React from "react";
import Footer from "../HomePage/Footer";
import NavBar from "../HomePage/NavBar";

const ContactUs = () => {
  return (
    <div>
      <NavBar></NavBar>
      <div className="bg-gray-300 flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://www.mowernew.com/wp-content/uploads/2023/07/pexels-gilmer-diaz-estela-6345502-1200x800.jpg)",
      }}>
        <form className="bg-white w-1/2 h-3/4 p-6 m-8 rounded-lg">
          <h1 className="text-center md:text-4xl font-bold text-lg mb-4 text-green-500">
            CONTACT US
          </h1>
          <label className="font-bold">First Name</label>
          <br />
          <input type="text" className="w-full mb-4 rounded-md" required/>
          <br />
          <label className="font-bold">Last Name</label>
          <br />
          <input type="text" className="w-full mb-4 rounded-md" required/>
          <br />
          <label className="font-bold">Email</label>
          <br />
          <input type="email" className="w-full mb-4 rounded-md" required/>
          <br />
          <label className="font-bold">Phone Number</label>
          <br />
          <input type="tel" className="w-full mb-4 rounded-md" required/>
          <br />
          <label className="font-bold">Message</label>
          <br />
          <textarea className="w-full mb-8 rounded-md" required></textarea>
          <br />
          <button
            type="submit"
            className="bg-green-500 block font-bold text-white m-auto p-4 rounded hover:bg-green-700"
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
