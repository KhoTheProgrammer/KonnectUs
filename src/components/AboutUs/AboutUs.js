import React from "react";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";

const AboutUs = () => {
  return (
    <div>
      <NavBar />
      <div>
        <div
          className="bg-cover bg-center h-[750px] flex items-center justify-center py-3"
          style={{
            backgroundImage:
              "url(https://www.mowernew.com/wp-content/uploads/2023/07/pexels-gilmer-diaz-estela-6345502-1200x800.jpg)",
          }}
        >
          <div className="bg-green-500 w-[60%] h-[550px] mr-[500px] p-[12px] font-bold mt-[80px] rounded-[80px]">
            <h1 className="text-black text-[22px] flex justify-center items-center">
              <b>About Us</b>
            </h1>
            <p className="text-white text-[18px]">
              KonnectUs Farmer's Zone is dedicated to revolutionizing
              agricultural communities by connecting farmers with buyers. Our
              platform aims to empower farmers, streamline the supply chain, and
              provide buyers with access to high-quality produce. Founded by a
              team passionate about sustainability and community empowerment, we
              prioritize transparency, fairness, and collaboration. Join us in
              creating a more sustainable and equitable food system.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
