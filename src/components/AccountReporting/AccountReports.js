import React, { useState } from "react";

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
    <div>
      <h>
        <ul className=" justify-center">REPORT LOGO</ul>
      </h>

      <div className=" max-w-auto  mx-3   mt-3">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text- to-black float-left">
              ACCOUNT REPORTED:
            </label>
            <input
              type="AccountReported"
              id="AccountReported"
              value={AccountReported}
              onChange={(e) => setAccountReported(e.target.value)}
              className=" mt-2   w-full border- to-black rounded-md shadow-sm focus:border- to-black focus:ring focus:ring-green-200 focus:ring-opacity-50"
              required
            />
          </div>
          <div>
            <label htmlFor="Reason" className=" text- to-black">
              REASON:
            </label>
            <textarea
              id="Reason"
              value={Reason}
              onChange={(e) => setReason(e.target.value)}
              rows="10"
              className="mt-1 block w-full border- to-black rounded- size-7 shadow- md focus:border-indigo-300 focus:ring focus:ring-green-200 focus:ring-opacity-50"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="Report"
              className="w-full bg- bg-green-600 text-white py-0 px-0 rounded-md hover:bg- bg-green-600 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              REPORT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountReports;
