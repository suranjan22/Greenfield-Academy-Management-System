import React, { useEffect, useState } from "react";
import axios from "axios";
/* import "../../assets/css/marks.css"; */

const MarksDetails = () => {
  const [marksData, setMarksData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("");

  const subjects = [
    "Science",
    "Mathematics",
    "Geography",
    "History",
    "Drawing",
    "Literature_1",
    "Literature_2",
  ];

  const classes = Array.from({ length: 12 }, (_, i) => `${i + 1}`);

  // 🔹 Fetch all marks data
  useEffect(() => {
    axios
      .get("http://localhost:8083/api/marks")
      .then((res) => {
        setMarksData(res.data);
        setFilteredData(res.data);
      })
      .catch((err) => console.error("Error fetching marks:", err));
  }, []);

  // 🔹 Apply filters when dropdowns change
  useEffect(() => {
    let filtered = marksData;

    // Filter by Class
    if (selectedClass !== "") {
      filtered = filtered.filter((record) => {
        const classNum = String(record.studentClass)
          .replace(/Class/i, "")
          .trim();
        return classNum === selectedClass;
      });
    }

    // Filter by Subject
    if (selectedSubject !== "") {
      filtered = filtered.filter(
        (record) => record.subject === selectedSubject
      );
    }

    setFilteredData(filtered);
  }, [selectedClass, selectedSubject, marksData]);

  return (
    <div className="marks-details-container">
      <h2>📊 Marks Details (Admin Panel)</h2>

      {/* 🔹 Filter Controls */}
      <div className="filters-card">
        <label>Filter by Class:</label>
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="">-- All Classes --</option>
          {classes.map((cls) => (
            <option key={cls} value={cls}>
              Class {cls}
            </option>
          ))}
        </select>

        <label style={{ marginLeft: "20px" }}>Filter by Subject:</label>
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
        >
          <option value="">-- All Subjects --</option>
          {subjects.map((sub) => (
            <option key={sub} value={sub}>
              {sub}
            </option>
          ))}
        </select>
      </div>

      {/* 🔹 Marks Table */}
      <div className="marks-table-container">
        <table className="marks-table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Name</th>
              <th>Class</th>
              <th>Subject</th>
              <th>Marks</th>
              <th>Total</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((record) => (
                <tr key={record.id}>
                  <td>{record.studentUniqueId}</td>
                  <td>{record.studentName}</td>
                  <td>{record.studentClass}</td>
                  <td>{record.subject}</td>
                  <td>{record.marksObtained}</td>
                  <td>{record.totalMarks || 100}</td>
                  <td>
                    {(
                      (record.marksObtained / (record.totalMarks || 100)) *
                      100
                    ).toFixed(2)}
                    %
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="no-data">
                  No marks found for selected filters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarksDetails;
