// src/components/admin/AdminDashboard.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import PostAnnouncement from "./PostAnnouncement";
import StudentsDetails from "./StudentsDetails";
import FeeDetails from "./FeeDetails";
import MarksDetails from "./MarksDetails";
import "../../assets/css/admin-dashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("announcement");
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const handleLogout = () => {
    // Clear localStorage
    localStorage.removeItem("role");
    localStorage.removeItem("user");
    
    // Redirect to login page
    navigate("/");
  };

  const confirmLogout = () => {
    setShowLogoutConfirm(true);
  };

  const cancelLogout = () => {
    setShowLogoutConfirm(false);
  };

  const renderPage = () => {
    switch (activePage) {
      case "announcement":
        return <PostAnnouncement />;
      case "students":
        return <StudentsDetails />;
      case "fees":
        return <FeeDetails />;
      case "marks":
        return <MarksDetails />;
      case "logout":
        return (
          <div className="logout-container">
            <div className="logout-card">
              <div className="logout-icon">🚪</div>
              <h2>Logout</h2>
              <p>Are you sure you want to logout from the admin dashboard?</p>
              <div className="logout-actions">
                <button className="logout-btn confirm" onClick={handleLogout}>
                  Yes, Logout
                </button>
                <button className="logout-btn cancel" onClick={() => setActivePage("announcement")}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return <PostAnnouncement />;
    }
  };

  return (
    <div className="admin-dashboard">
      <Sidebar activePage={activePage} setActivePage={setActivePage} onLogoutClick={confirmLogout} />
      <div className="dashboard-content">
        {/* Header with user info and quick logout */}
        <div className="content-header">
          <div className="header-content">
            <h1>
              {activePage === "announcement" && "Post Announcement"}
              {activePage === "students" && "Students Details"}
              {activePage === "fees" && "Fee Details"}
              {activePage === "marks" && "Marks Details"}
              {activePage === "logout" && "Logout"}
            </h1>
            <div className="user-info">
              <span>Welcome, Admin</span>
              <button className="header-logout-btn" onClick={confirmLogout}>
                Logout
              </button>
            </div>
          </div>
        </div>
        
        {renderPage()}
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="modal-overlay">
          <div className="logout-modal">
            <div className="modal-icon">⚠️</div>
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to logout from the admin dashboard?</p>
            <div className="modal-actions">
              <button className="modal-btn confirm" onClick={handleLogout}>
                Yes, Logout
              </button>
              <button className="modal-btn cancel" onClick={cancelLogout}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;