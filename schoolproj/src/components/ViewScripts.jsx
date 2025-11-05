import React, { useState } from "react";

const ViewScripts = () => {
  const [filters, setFilters] = useState({
    className: "",
    subject: ""
  });

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

  // Dummy data
  const dummyScripts = [
    { id: 1, name: "John Doe", class: "Class 10", roll: "101", subject: "Mathematics", scriptUrl: "#" },
    { id: 2, name: "Jane Smith", class: "Class 10", roll: "102", subject: "Science", scriptUrl: "#" },
    { id: 3, name: "Mike Johnson", class: "Class 9", roll: "201", subject: "History", scriptUrl: "#" },
    { id: 4, name: "Sarah Wilson", class: "Class 11", roll: "301", subject: "Literature", scriptUrl: "#" },
    { id: 5, name: "David Brown", class: "Class 8", roll: "401", subject: "Geography", scriptUrl: "#" }
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const filteredScripts = dummyScripts.filter(script => {
    return (
      (!filters.className || script.class === filters.className) &&
      (!filters.subject || script.subject === filters.subject)
    );
  });

  return (
    <div className="scripts-container">
      <div className="filters-card">
        <h3>Filter Scripts</h3>
        <div className="filter-controls">
          <select
            name="className"
            value={filters.className}
            onChange={handleFilterChange}
          >
            <option value="">All Classes</option>
            {Array.from({ length: 12 }, (_, i) => (
              <option key={i + 1} value={`Class ${i + 1}`}>
                Class {i + 1}
              </option>
            ))}
          </select>

          <select
            name="subject"
            value={filters.subject}
            onChange={handleFilterChange}
          >
            <option value="">All Subjects</option>
            {subjects.map(subject => (
              <option key={subject} value={subject}>
                {subject}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="scripts-table-container">
        <table className="scripts-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
              <th>Roll No</th>
              <th>Subject</th>
              <th>Answer Script</th>
            </tr>
          </thead>
          <tbody>
            {filteredScripts.map(script => (
              <tr key={script.id}>
                <td>{script.name}</td>
                <td>{script.class}</td>
                <td>{script.roll}</td>
                <td>{script.subject}</td>
                <td>
                  <a href={script.scriptUrl} className="download-link">
                     Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredScripts.length === 0 && (
          <div className="no-data">No scripts found for the selected filters.</div>
        )}
      </div>
    </div>
  );
};

export default ViewScripts;