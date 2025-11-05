import React, { useState } from "react";
import "../assets/css/admission.css";
import schoolImage from "../assets/images/school.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    guardianName: "",
    studentClass: "",
    gender: "",
    studentEmail: "",
    studentPhone: "",
    address: "",
  });

  const [message, setMessage] = useState("");
  const [studentUniqueId, setStudentUniqueId] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8083/api/admissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage("🎉 Admission form submitted successfully!");
        setStudentUniqueId(data.studentUniqueId); // backend auto-generated ID

        // Reset form after submission
        setFormData({
          studentName: "",
          guardianName: "",
          studentClass: "",
          gender: "",
          studentEmail: "",
          studentPhone: "",
          address: "",
        });
      } else {
        setMessage("❌ Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setMessage("⚠️ Error: Backend not reachable.");
    }
  };

  const classOptions = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <>
      <Navbar />
      <div
        className="admission-container"
        style={{ backgroundImage: `url(${schoolImage})` }}
      >
        <div className="admission-box">
          <h2>Student Admission Form</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div>
                <label>Student Name</label>
                <input
                  type="text"
                  name="studentName"
                  placeholder="Enter student full name"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Guardian Name</label>
                <input
                  type="text"
                  name="guardianName"
                  placeholder="Enter guardian's name"
                  value={formData.guardianName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div>
                <label>Class</label>
                <select
                  name="studentClass"
                  value={formData.studentClass}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Class</option>
                  {classOptions.map((cls) => (
                    <option key={cls} value={`Class ${cls}`}>
                      Class {cls}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Gender</label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div>
                <label>Email</label>
                <input
                  type="email"
                  name="studentEmail"
                  placeholder="Enter student email"
                  value={formData.studentEmail}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label>Phone</label>
                <input
                  type="tel"
                  name="studentPhone"
                  placeholder="Enter phone number"
                  value={formData.studentPhone}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit phone number"
                />
              </div>
            </div>

            <div className="form-full">
              <label>Address</label>
              <textarea
                name="address"
                placeholder="Enter full address"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit">Submit Application</button>
          </form>

          {message && <p className="message">{message}</p>}

          {studentUniqueId && (
            <p className="student-id">
              ✅ Your Student ID: <strong>{studentUniqueId}</strong>
              <br />
              (Please save this ID for future reference)
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdmissionForm;
