import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TeacherAssignments from "./TeacherAssignments";
import ViewScripts from "./ViewScripts";
import GiveMarks from "./GiveMarks";
import "../assets/css/TeacherDashboard.css";

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("assignments");
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

  const renderContent = () => {
    switch (activeSection) {
      case "assignments":
        return <TeacherAssignments />;
      case "scripts":
        return <ViewScripts />;
      case "marks":
        return <GiveMarks />;
      case "logout":
        return (
          <div className="logout-container">
            <div className="logout-card">
              <div className="logout-icon">🚪</div>
              <h2>Logout</h2>
              <p>Are you sure you want to logout from the teacher dashboard?</p>
              <div className="logout-actions">
                <button className="logout-btn confirm" onClick={handleLogout}>
                  Yes, Logout
                </button>
                <button className="logout-btn cancel" onClick={() => setActiveSection("assignments")}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return <TeacherAssignments />;
    }
  };

  return (
    <div className="teacher-dashboard">
      <div className="dashboard-sidebar">
        <div className="sidebar-header">
          <h2>Teacher Portal</h2>
          <p>Welcome back!</p>
        </div>
        <nav className="sidebar-nav">
        <button
            className={`nav-btn ${activeSection === "marks" ? "active" : ""}`}
            onClick={() => setActiveSection("marks")}
          >
             Give Marks
          </button>
          <button
            className={`nav-btn ${activeSection === "assignments" ? "active" : ""}`}
            onClick={() => setActiveSection("assignments")}
          >
             Give Assignment
          </button>
          <button
            className={`nav-btn ${activeSection === "scripts" ? "active" : ""}`}
            onClick={() => setActiveSection("scripts")}
          >
            View Script
          </button>
          
          
          {/* Logout Button in Sidebar Footer */}
          {/* <div className="sidebar-footer">
            <button
              className="nav-btn logout-btn"
              onClick={confirmLogout}
            >
              🚪 Logout
            </button>
          </div> */}
        </nav>
      </div>

      <div className="dashboard-content">
        <header className="content-header">
          <div className="header-content">
            <h1>
              {activeSection === "assignments" && "Give Assignment"}
              {activeSection === "scripts" && "View Answer Scripts"}
              {activeSection === "marks" && "Give Marks to Students"}
              {activeSection === "logout" && "Logout"}
            </h1>
            <div className="user-info">
              <span>Welcome, Teacher</span>
              <button className="header-logout-btn" onClick={confirmLogout}>
                Logout
              </button>
            </div>
          </div>
        </header>
        <div className="content-body">
          {renderContent()}
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      {showLogoutConfirm && (
        <div className="modal-overlay">
          <div className="logout-modal">
            <div className="modal-icon">⚠️</div>
            <h3>Confirm Logout</h3>
            <p>Are you sure you want to logout from the teacher dashboard?</p>
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

export default TeacherDashboard;