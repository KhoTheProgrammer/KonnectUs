import React, { useState } from "react";
import Footer from "../HomePage/Footer";
import NavBar from "../HomePage/NavBar";

const ContactUs = () => {
  const [success, setSuccess] = useState("");
  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    const formEle = document.querySelector("form");
    const formdata = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbyFgZQmQ_jzR_9_-yO0v-cbG6KE8Np_RS1Tw5_ovXkKQl5Dliev8KU282gS5p0VRcRhCg/exec", {
        method: "POST",
        body: formdata
      }
    );
    setSuccess("Message successfully sent");
  };

  return (
    <div>
      <NavBar />
      <div
        className="bg-gray-300 flex justify-center items-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://get.pxhere.com/photo/nature-grass-plant-field-farm-lawn-meadow-prairie-sunlight-leaf-flower-green-crop-agriculture-farmland-in-rural-areas-grassland-habitat-views-ecosystem-natural-environment-grass-family-plant-stem-computer-wallpaper-land-plant-every-day-793337.jpg)",
        }}
      >
        <form
          className="bg-white md:w-1/2 w-3/4 h-3/4 p-6 m-8 rounded-lg form"
          onSubmit={handleSubmit}
        >
          <h1 className="text-center md:text-4xl font-bold text-lg mb-4 text-green-500">
            CONTACT US
          </h1>
          <label className="font-bold">First Name</label>
          <br />
          <input
            type="text"
            className="w-full mb-4 rounded-md"
            name="FirstName"
            required
            onChange={handleChange}
           
          />
          <br />
          <label className="font-bold">Last Name</label>
          <br />
          <input
            type="text"
            className="w-full mb-4 rounded-md"
            name="LastName"
            required
            onChange={handleChange}
           
          />
          <br />
          <label className="font-bold">Email</label>
          <br />
          <input
            type="email"
            className="w-full mb-4 rounded-md"
            name="Email"
            required
            onChange={handleChange}
          
          />
          <br />
          <label className="font-bold">Phone Number</label>
          <br />
          <input
            type="tel"
            className="w-full mb-4 rounded-md"
            name="PhoneNumber"
            required
            onChange={handleChange}
         
          />
          <br />
          <label className="font-bold">Message</label>
          <br />
          <textarea
            className="w-full mb-8 rounded-md"
            name="Message"
            required
            onChange={handleChange}
      
          ></textarea>
          <br />
          {success && <div className=" text-xl text-center mb-4">{success}</div>}
          <button
            type="submit"
            className="bg-green-500 block font-bold text-white m-auto p-4 rounded hover:bg-green-700"
          >
            CONTACT
          </button>
          
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
