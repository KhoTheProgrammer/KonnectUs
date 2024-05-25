import React, { useState } from "react";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";

const AccountReports = () => {
  const [AccountReported, setAccountReported] = useState("");
  const [Reason, setReason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("AccountReported:", AccountReported);
    console.log("Reason:", Reason);

    setAccountReported("");
    setReason("");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <div className="flex-grow container mx-auto p-6">
        <h1 className="text-center text-white bg-green-500 p-4 rounded-md text-3xl font-bold">
          REPORTS
        </h1>
        <div className="mt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="AccountReported" className="block text-black mb-2">
                ACCOUNT REPORTED:
              </label>
              <input
                type="text"
                id="AccountReported"
                value={AccountReported}
                onChange={(e) => setAccountReported(e.target.value)}
                className="bg-gray-200 w-full border border-black rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 p-2"
                required
              />
            </div>
            <div>
              <label htmlFor="Reason" className="block text-black mb-2">
                REASON:
              </label>
              <textarea
                id="Reason"
                value={Reason}
                onChange={(e) => setReason(e.target.value)}
                rows="10"
                className="bg-gray-200 w-full border border-black rounded-md shadow-sm focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 p-2"
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-200 focus:ring-opacity-50"
              >
                SEND REPORT
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AccountReports;
