import React, { useEffect, useState } from "react";
import axios from "axios";
import "../assets/css/Announcement.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import schoolImage from "../assets/images/school.jpg";

const Announcement = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8083/api/announcements")
      .then((res) => setAnnouncements(res.data))
      .catch((err) => console.error("Error fetching announcements:", err));
  }, []);

  const getCategoryIcon = (category) => {
    switch (category) {
      case "academic": return "📚";
      case "event": return "🎉";
      case "holiday": return "🏖️";
      case "sports": return "⚽";
      default: return "📢";
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <>
      <Navbar />
      <div
        className="announcement-container"
        style={{ backgroundImage: `url(${schoolImage})` }}
      >
        <div className="announcement-content">
          <h1 className="announcement-title">Announcements</h1>

          <div className="announcement-grid">
            {announcements.length === 0 ? (
              <p className="no-data">No announcements yet.</p>
            ) : (
              announcements.map((a) => (
                <div key={a.id} className="announcement-card">
                  <div className="announcement-card-header">
                    <div className="announcement-category">
                      <span className="category-icon">{getCategoryIcon(a.category)}</span>
                      <span className="category-text">{a.category}</span>
                    </div>
                    <div className="announcement-date">{formatDate(a.date)}</div>
                  </div>

                  <div className="announcement-card-body">
                    <h3 className="announcement-card-title">{a.title}</h3>
                    <p className="announcement-card-description">{a.description}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Announcement;
