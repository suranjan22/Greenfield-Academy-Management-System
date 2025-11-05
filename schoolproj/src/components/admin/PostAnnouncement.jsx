import React, { useState } from "react";
import axios from "axios";
/*import "../../assets/css/AnnouncementForm.css";*/

const PostAnnouncement = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "general",
    date: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8083/api/announcements", formData);
      setMessage("✅ Announcement posted successfully!");
      setFormData({ title: "", description: "", category: "general", date: "" });
    } catch (error) {
      console.error("Error posting announcement:", error);
      setMessage("❌ Failed to post announcement. Try again.");
    }
  };

  return (
    <div className="content-body">
      <div className="content-header">
        <h1>Post Announcement</h1>
      </div>

      <div className="announcement-form-container">
        <div className="form-card">
          <h2>Create New Announcement</h2>
          {message && <p className="status-message">{message}</p>}

          <form className="announcement-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter announcement title"
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter announcement description"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                >
                  <option value="general">General</option>
                  <option value="academic">Academic</option>
                  <option value="event">Event</option>
                  <option value="holiday">Holiday</option>
                  <option value="sports">Sports</option>
                </select>
              </div>

              <div className="form-group">
                <label>Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button type="submit" className="submit-btn">
              Post Announcement
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostAnnouncement;
