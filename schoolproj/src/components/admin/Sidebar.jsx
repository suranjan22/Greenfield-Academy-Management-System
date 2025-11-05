// src/components/admin/Sidebar.js
import React from "react";

const Sidebar = ({ activePage, setActivePage, onLogoutClick }) => {
  const menuItems = [
    
    { key: "students", label: "Students Details", icon: "" },
    { key: "announcement", label: "Post Announcement", icon: "" },
    /*{ key: "fees", label: "Fee Details", icon: "" },*/
    { key: "marks", label: "Marks Details", icon: "" },
  ];

  return (
    <div className="dashboard-sidebar">
      <div className="sidebar-header">
        <h2>Admin Dashboard</h2>
        <p>Greenfield Academy</p>
      </div>
      
      <div className="sidebar-nav">
        {menuItems.map((item) => (
          <button
            key={item.key}
            className={`nav-btn ${activePage === item.key ? "active" : ""}`}
            onClick={() => setActivePage(item.key)}
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </button>
        ))}
        
        {/* Logout Button */}
       {/* <div className="sidebar-footer">
          <button
            className="nav-btn logout-btn"
            onClick={onLogoutClick}
          >
            <span className="nav-icon">🚪</span>
            Logout
          </button>
        </div>*/} 
      </div>
    </div>
  );
};

export default Sidebar;