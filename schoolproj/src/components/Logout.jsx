import React from "react";

const Logout = () => {
  const handleLogout = () => {
    // Add your logout logic here
    console.log("Logging out...");
    alert("You have been logged out successfully!");
    // Typically you would redirect to login page or clear auth tokens
  };

  return (
    <div className="logout-container">
      <div className="logout-card">
        <div className="logout-icon"></div>
        <h2>Ready to Leave?</h2>
        <p>Are you sure you want to logout from the Teacher Portal?</p>
        <button onClick={handleLogout} className="logout-btn">
          Confirm Logout
        </button>
      </div>
    </div>
  );
};

export default Logout;