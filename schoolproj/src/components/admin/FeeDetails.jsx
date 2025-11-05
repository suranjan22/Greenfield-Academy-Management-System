import React, { useEffect, useState } from "react";
import axios from "axios";
/*import "../assets/css/FeeDetails.css";*/

const FeeDetails = () => {
  const [payments, setPayments] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8083/api/payments")
      .then(res => setPayments(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="fee-container">
      <h2>Student Payment Records</h2>
      <table className="fee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Roll No</th>
            <th>Class</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Payment ID</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {payments.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.fullName}</td>
              <td>{p.rollNo}</td>
              <td>{p.studentClass}</td>
              <td>{p.email}</td>
              <td>₹{p.amount}</td>
              <td>{p.paymentStatus}</td>
              <td>{p.paymentId}</td>
              <td>{p.paymentDate?.replace("T", " ").slice(0, 19)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeeDetails;
