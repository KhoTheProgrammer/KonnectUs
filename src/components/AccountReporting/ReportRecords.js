import React from "react";
import NavBar from "../HomePage/NavBar";
import Footer from "../HomePage/Footer";

const ReportList = () => {
  // Dummy data for demonstration (replace with actual data later)
  const reports = [
    {
      reporter: "John Doe",
      reportDescription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      accountReported: "example_account",
      date: "2024-05-30",
      time: "12:30 PM",
    },
    {
      reporter: "Jane Smith",
      reportDescription:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      accountReported: "another_example",
      date: "2024-05-29",
      time: "10:45 AM",
    },
  ];

  return (
    <div>
        <NavBar></NavBar>
    <div
      style={{
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px",
        backgroundColor: "#28a745",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "#fff",
          textAlign: "center",
          marginBottom: "20px",
        }}
      >
        Report List
      </h2>
      <ul style={{ listStyle: "none", padding: "0" }}>
        {reports.map((report, index) => (
          <li
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              marginBottom: "15px",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              color: "#000",
            }}
          >
            <div style={{ marginBottom: "10px" }}>
              <strong style={{ marginRight: "5px" }}>Reporter:</strong>{" "}
              {report.reporter}
            </div>
            <div style={{ marginBottom: "10px" }}>
              <strong style={{ marginRight: "5px" }}>
                Report Description:
              </strong>{" "}
              {report.reportDescription}
            </div>
            <div style={{ marginBottom: "10px" }}>
              <strong style={{ marginRight: "5px" }}>Account Reported:</strong>{" "}
              {report.accountReported}
            </div>
            <div style={{ marginBottom: "10px" }}>
              <strong style={{ marginRight: "5px" }}>Date:</strong>{" "}
              {report.date}
            </div>
            <div style={{ marginBottom: "10px" }}>
              <strong style={{ marginRight: "5px" }}>Time:</strong>{" "}
              {report.time}
            </div>
          </li>
        ))}
      </ul>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default ReportList;
