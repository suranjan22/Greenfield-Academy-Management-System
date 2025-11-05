import React from "react";
import "../assets/css/AboutUs.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import schoolImage from "../assets/images/school.jpg";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div 
        className="aboutus-container"
        style={{ 
          backgroundImage: `url(${schoolImage})`
        }}
      >
        <div className="aboutus-content">
          <h2 className="aboutus-title">About Greenfield Academy</h2>
          
          <div className="about-main-content">
            {/* Left side - Main content */}
            <div className="about-text-content">
              <p>
                Welcome to <strong>Greenfield Academy</strong>, a premier educational institution 
                specializing in holistic education for students aged 5–18. We pride ourselves on 
                being a diverse community that nurtures intellectual curiosity and character development.
              </p>

              <p>
                Established in 1998, Greenfield Academy has become one of the region's leading 
                educational institutions. Our modern campus with state-of-the-art facilities 
                provides students with an ideal environment to thrive academically and personally.
              </p>

              <hr className="content-divider" />

              {/* Stats Section */}
              <div className="about-stats">
                <div className="stat-card">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">Years of Excellence</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">2,000+</span>
                  <span className="stat-label">Successful Alumni</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">98%</span>
                  <span className="stat-label">Academic Success</span>
                </div>
                <div className="stat-card">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">Expert Faculty</span>
                </div>
              </div>

              <p>
                At Greenfield Academy, we believe in educating the whole child - mind, body, and spirit. 
                Our comprehensive approach ensures students develop the foundations necessary for success 
                in life beyond the classroom.
              </p>
            </div>

            {/* Right side - Mission & Vision */}
            <div className="mission-vision-sidebar">
              <div className="mission-card">
                <h3>Our Mission</h3>
                <p>
                  To provide transformative education that nurtures curiosity, builds character, 
                  and prepares students to become responsible global citizens and future leaders.
                </p>
              </div>
              <div className="vision-card">
                <h3>Our Vision</h3>
                <p>
                  To be a center of excellence that inspires lifelong learning, fosters innovation, 
                  and develops well-rounded individuals for a changing world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;