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
            <p>
              Welcome to KonnectUS, the ultimate platform dedicated to
              empowering farmers and revolutionizing agriculture. At KonnectUS,
              we believe in bridging the gap between traditional farming
              practices and modern technology to create a thriving community for
              farmers everywhere.
              <h2>Mission</h2>
              <p>
                Our mission is to create an innovative, accessible, and
                supportive platform that connects farmers with the resources,
                tools, and community they need to succeed. We aim to enhance
                agricultural productivity, promote sustainable farming
                practices, and improve the livelihoods of farmers through
                technology-driven solutions and a collaborative approach.
              </p>
              <h2>Vision</h2>
              <p>
                Our vision is to be the leading global platform that transforms
                the agricultural landscape by harnessing the power of technology
                and community. We envision a world where every farmer has the
                knowledge, resources, and support to cultivate their land
                efficiently and sustainably, contributing to global food
                security and a healthier planet
              </p>
              <h2>Values</h2>
              <p>
                Innovation: We embrace cutting-edge technology and innovative
                practices to continually improve the agricultural sector
              </p>
              <p>
                Community: We foster a strong sense of community, encouraging
                collaboration, knowledge sharing, and mutual support among
                farmers.
              </p>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
