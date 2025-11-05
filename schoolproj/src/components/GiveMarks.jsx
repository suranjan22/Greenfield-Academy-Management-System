import React, { useEffect, useState } from "react";
import axios from "axios";
/* import "../../assets/css/marks.css"; */

const GiveMarks = () => {
  const [students, setStudents] = useState([]);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [subject, setSubject] = useState("");
  const [marks, setMarks] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const subjects = [
    "Science",
    "Mathematics",
    "Geography",
    "History",
    "Drawing",
    "Literature_1",
    "Literature_2",
  ];

  const classes = Array.from({ length: 12 }, (_, i) => `${i + 1}`); // "1" → "12"

  // 🔹 Fetch all students on load
  useEffect(() => {
    axios
      .get("http://localhost:8083/api/admissions")
      .then((res) => {
        setStudents(res.data);
        setFilteredStudents(res.data);
      })
      .catch((err) => console.error("Error fetching students:", err));
  }, []);

  // 🔹 Filter students based on selected class
  useEffect(() => {
    if (selectedClass === "") {
      setFilteredStudents(students);
    } else {
      const filtered = students.filter((stu) => {
        // Strip "Class" and spaces before comparison
        const classNum = String(stu.studentClass)
          .replace(/Class/i, "")
          .trim();
        return classNum === selectedClass;
      });
      setFilteredStudents(filtered);
    }
  }, [selectedClass, students]);

  // 🔹 Update marks input
  const handleMarkChange = (studentId, value) => {
    setMarks((prev) => ({ ...prev, [studentId]: value }));
  };

  // 🔹 Submit marks for a single student
  const handleSubmitMarks = async (student) => {
    if (!subject) {
      alert("Please select a subject first");
      return;
    }

    const givenMarks = marks[student.id];
    if (!givenMarks || givenMarks < 0 || givenMarks > 100) {
      alert("Please enter valid marks between 0 and 100");
      return;
    }

    const data = {
      studentUniqueId: student.studentUniqueId,
      studentName: student.studentName,
      studentClass: student.studentClass,
      subject: subject,
      marksObtained: parseInt(givenMarks),
    };

    try {
      await axios.post("http://localhost:8083/api/marks", data);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
      setMarks((prev) => ({ ...prev, [student.id]: "" })); // reset input
    } catch (error) {
      console.error("Error saving marks:", error);
      alert("Failed to save marks!");
    }
  };

  return (
    <div className="marks-container">
      <h2>🎯 Give Marks to Students</h2>

      {showSuccess && (
        <div className="success-popup">✅ Marks submitted successfully!</div>
      )}

      {/* 🔹 Filter Controls */}
      <div className="filters-card">
        <label>Select Subject:</label>
        <select value={subject} onChange={(e) => setSubject(e.target.value)}>
          <option value="">--Select Subject--</option>
          {subjects.map((sub) => (
            <option key={sub} value={sub}>
              {sub}
            </option>
          ))}
        </select>

        <label style={{ marginLeft: "20px" }}>Select Class:</label>
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="">--All Classes--</option>
          {classes.map((cls) => (
            <option key={cls} value={cls}>
              Class {cls}
            </option>
          ))}
        </select>
      </div>

      {/* 🔹 Students Table */}
      <div className="marks-table-container">
        <table className="marks-table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Class</th>
              <th>Marks</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.studentUniqueId}>
                  <td>{student.studentUniqueId}</td>
                  <td>{student.studentName}</td>
                  <td>{student.studentClass}</td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      max="100"
                      value={marks[student.id] || ""}
                      onChange={(e) =>
                        handleMarkChange(student.id, e.target.value)
                      }
                      placeholder="Enter marks"
                    />
                  </td>
                  <td>
                    <button
                      onClick={() => handleSubmitMarks(student)}
                      className="submit-marks-btn"
                    >
                      Submit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={{ textAlign: "center", fontStyle: "italic" }}>
                  No students found for this class.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GiveMarks;
