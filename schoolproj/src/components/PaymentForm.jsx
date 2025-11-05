import React, { useEffect, useState } from "react";
import "../assets/css/PaymentForm.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RAZORPAY_TEST_KEY = "rzp_test_RZbk2zTX96f0Vq";

const loadRazorpayScript = () => {
  return new Promise((resolve, reject) => {
    if (window.Razorpay) return resolve(true);
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(true);
    script.onerror = () => reject(new Error("Failed to load Razorpay SDK"));
    document.body.appendChild(script);
  });
};

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    rollNo: "",
    studentClass: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    if (!formData.fullName || !formData.rollNo || !formData.email) {
      alert("Please fill all fields");
      return;
    }

    await loadRazorpayScript();

    const amount = 5000 * 100;

    const options = {
      key: RAZORPAY_TEST_KEY,
      amount: amount,
      currency: "INR",
      name: "School Fee Payment",
      description: "Dummy Payment (Frontend Only)",
      image: "https://razorpay.com/favicon.png",
      handler: function (response) {
        alert("✅ Dummy Payment Successful!\nPayment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: formData.fullName,
        email: formData.email,
      },
      theme: { color: "#007bff" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <>
      <Navbar />
      <div className="payment-container">
        <div className="payment-box">
          <h2>Student Fee Payment </h2>

          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            placeholder="Full Name"
            onChange={handleChange}
          />
          <input
            type="text"
            name="rollNo"
            value={formData.rollNo}
            placeholder="Roll Number"
            onChange={handleChange}
          />
          <select
            name="studentClass"
            value={formData.studentClass}
            onChange={handleChange}
          >
            <option value="">Select Class</option>
            {[...Array(12)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                Class {i + 1}
              </option>
            ))}
          </select>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
          />

          <button onClick={handlePayment} className="pay-btn" disabled={loading}>
            {loading ? "Processing..." : "Pay ₹5000"}
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentForm;