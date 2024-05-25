import React from 'react';
import NavBar from '../HomePage/NavBar';
import Footer from '../HomePage/Footer';

const AboutUs = () => {
  return (
    <div>
      <NavBar></NavBar>

    
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-green-400 via-yellow-300 to-green-600">
      <div className="container mx-auto bg-white mt-[20px] mb-[20px] rounded-lg shadow-lg p-8 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6 text-center text-green-900">About Us</h1>
        <p className="text-lg mb-6 text-gray-800">
          Welcome to <span className="font-semibold text-green-600">KonnectUS</span>, the ultimate platform dedicated to empowering farmers and revolutionizing agriculture. At KonnectUS, we believe in bridging the gap between traditional farming practices and modern technology to create a thriving community for farmers everywhere.
        </p>
        <h2 className="text-3xl font-bold mb-4 text-green-800">Mission</h2>
        <p className="text-lg mb-6 text-gray-800">
          Our mission is to create an innovative, accessible, and supportive platform that connects farmers with the resources, tools, and community they need to succeed. We aim to enhance agricultural productivity, promote sustainable farming practices, and improve the livelihoods of farmers through technology-driven solutions and a collaborative approach.
        </p>
        <h2 className="text-3xl font-bold mb-4 text-green-800">Vision</h2>
        <p className="text-lg mb-6 text-gray-800">
          Our vision is to be the leading global platform that transforms the agricultural landscape by harnessing the power of technology and community. We envision a world where every farmer has the knowledge, resources, and support to cultivate their land efficiently and sustainably, contributing to global food security and a healthier planet.
        </p>
        <h2 className="text-3xl font-bold mb-4 text-green-800">Values</h2>
        <ul className="list-disc pl-6 text-lg mb-4 text-gray-800">
          <li className="mb-2"><strong className="text-green-600">Innovation:</strong> We embrace cutting-edge technology and innovative practices to continually improve the agricultural sector.</li>
          <li className="mb-2"><strong className="text-green-600">Community:</strong> We foster a strong sense of community, encouraging collaboration, knowledge sharing, and mutual support among farmers.</li>
          <li className="mb-2"><strong className="text-green-600">Sustainability:</strong> We are committed to promoting sustainable farming practices that protect the environment and ensure long-term agricultural productivity.</li>
          <li className="mb-2"><strong className="text-green-600">Empowerment:</strong> We strive to empower farmers with the tools, knowledge, and resources they need to succeed and thrive.</li>
          <li className="mb-2"><strong className="text-green-600">Integrity:</strong> We conduct our business with the highest standards of integrity, honesty, and transparency.</li>
          <li className="mb-2"><strong className="text-green-600">Excellence:</strong> We are dedicated to delivering excellence in every aspect of our platform and services, ensuring the best outcomes for our users.</li>
        </ul>
      </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;