import React, { useState } from "react";

const TeacherAssignments = () => {
  const [formData, setFormData] = useState({
    teacherName: "",
    className: "",
    subject: "",
    file: null
  });

  const [fileName, setFileName] = useState("");

  const subjects = [
    "Science",
    "Geography",
    "Literature",
    "History",
    "Mathematics",
    "General Knowledge",
    "Drawing",
    "Others"
  ];

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      const selectedFile = files[0];
      setFormData(prev => ({ ...prev, file: selectedFile }));
      setFileName(selectedFile ? selectedFile.name : "");
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.file) {
      alert("Please select a PDF file!");
      return;
    }
    
    console.log("Assignment Data:", formData);
    alert(`✅ Assignment for ${formData.className} - ${formData.subject} uploaded successfully!`);
    
    // Reset form
    setFormData({
      teacherName: "",
      className: "",
      subject: "",
      file: null
    });
    setFileName("");
  };

  return (
    <div className="assignment-form-container">
      <div className="form-card">
        <h2>Create New Assignment</h2>
        <form onSubmit={handleSubmit} className="assignment-form">
          <div className="form-group">
            <label>Teacher Name</label>
            <input
              type="text"
              name="teacherName"
              value={formData.teacherName}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Class</label>
            <select
              name="className"
              value={formData.className}
              onChange={handleChange}
              required
            >
              <option value="">Select Class</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={`Class ${i + 1}`}>
                  Class {i + 1}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Subject</label>
            <select
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            >
              <option value="">Select Subject</option>
              {subjects.map(subject => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Upload Assignment PDF</label>
            <div className="file-upload-wrapper">
              <input
                type="file"
                id="file-upload"
                name="file"
                accept=".pdf"
                onChange={handleChange}
                required
                className="file-input"
              />
              <label htmlFor="file-upload" className="file-upload-label">
                <span className="file-upload-icon">📁</span>
                <span className="file-upload-text">
                  {fileName || "Choose PDF file"}
                </span>
                <span className="file-upload-button">Browse</span>
              </label>
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Upload Assignment
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherAssignments;