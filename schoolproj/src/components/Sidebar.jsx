import React, { useState } from "react";
import "../assets/css/admin.css";

const Sidebar = ({ setActivePage }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
      <button className="toggle-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <ul>
        <li onClick={() => setActivePage("home")}>🏠 Home</li>
        <li onClick={() => setActivePage("students")}>🎓 Students</li>
        <li onClick={() => setActivePage("teachers")}>👩‍🏫 Teachers</li>
        <li onClick={() => setActivePage("logout")}>🚪 Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
