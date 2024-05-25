import React, { useState } from "react";
import Footer from "../HomePage/Footer";
import NavBar from "../HomePage/NavBar";

const ContactUs = () => {
  const [formdata, setFormdata] = useState({
    fname: "",
    lname: "",
    email: "",
    phonenumber: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwKuPdtFhZIZt2dz3Ie3NiE9-zg16R1Lb4S_ZZjG9sbDXZQsYJzMia0IVNFeEPfxIDb/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formdata),
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
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
          className="bg-white md:w-1/2 w-3/4 h-3/4 p-6 m-8 rounded-lg"
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
            name="fname"
            required
            onChange={handleChange}
            value={formdata.fname}
          />
          <br />
          <label className="font-bold">Last Name</label>
          <br />
          <input
            type="text"
            className="w-full mb-4 rounded-md"
            name="lname"
            required
            onChange={handleChange}
            value={formdata.lname}
          />
          <br />
          <label className="font-bold">Email</label>
          <br />
          <input
            type="email"
            className="w-full mb-4 rounded-md"
            name="email"
            required
            onChange={handleChange}
            value={formdata.email}
          />
          <br />
          <label className="font-bold">Phone Number</label>
          <br />
          <input
            type="tel"
            className="w-full mb-4 rounded-md"
            name="phonenumber"
            required
            onChange={handleChange}
            value={formdata.phonenumber}
          />
          <br />
          <label className="font-bold">Message</label>
          <br />
          <textarea
            className="w-full mb-8 rounded-md"
            name="message"
            required
            onChange={handleChange}
            value={formdata.message}
          ></textarea>
          <br />
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
