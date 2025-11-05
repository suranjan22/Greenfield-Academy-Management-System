import React, { useState, useEffect } from "react";

const StudentsDetails = () => {
  const [students, setStudents] = useState([]);
  const [selectedClass, setSelectedClass] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await fetch("http://localhost:8083/api/admissions");
      if (response.ok) {
        const data = await response.json();
        setStudents(data);
      } else {
        console.error("❌ Failed to load students");
      }
    } catch (error) {
      console.error("⚠️ Error fetching students:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredStudents = selectedClass
    ? students.filter(
        (student) =>
          student.studentClass &&
          student.studentClass.toLowerCase().includes(selectedClass.toLowerCase())
      )
    : students;

  if (loading) return <p>Loading student data...</p>;

  return (
    <div className="content-body">
      <div className="content-header">
        <h1>📚 Student Details</h1>
      </div>

      <div className="filters-card">
        <h3>Filter by Class</h3>
        <div className="filter-controls">
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option value="">All Classes</option>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={`Class ${i + 1}`}>
                Class {i + 1}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="students-table-container">
        <table className="students-table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Guardian Name</th>
              <th>Gender</th>
              <th>Class</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr key={student.id}>
                <td>{student.studentUniqueId}</td>
                <td>{student.studentName}</td>
                <td>{student.guardianName}</td>
                <td>{student.gender}</td>
                <td>{student.studentClass}</td>
                <td>{student.studentEmail}</td>
                <td>{student.studentPhone}</td>
                <td>{student.address}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredStudents.length === 0 && (
          <div className="no-data">No students found for the selected class.</div>
        )}
      </div>
    </div>
  );
};

export default StudentsDetails;
