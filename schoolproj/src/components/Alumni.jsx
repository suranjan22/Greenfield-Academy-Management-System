import React from "react";
import "../assets/css/Alumni.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import schoolImage from "../assets/images/school.jpg";

// Import alumni images
import alumni1 from "../assets/images/alumni1.jpg";
import alumni2 from "../assets/images/alumni2.jpg";
import alumni3 from "../assets/images/alumni3.jpg";
import alumni4 from "../assets/images/alumni4.jpg";

const alumniData = [
  { 
    id: 1, 
    name: "Amit Sharma", 
    /*rank: "Rank 1", */
    img: alumni1,
    achievement: "IAS Officer",
    batch: "2010 Batch",
    description: "Secured All India Rank 1 in UPSC Civil Services Examination 2018. Currently serving as District Collector."
  },
  { 
    id: 2, 
    name: "Sneha Roy", 
    /*rank: "Rank 2", */
    img: alumni2,
    achievement: "Senior Software Engineer at Google",
    batch: "2012 Batch",
    description: "Leading AI research team at Google. Published multiple research papers in machine learning."
  },
  { 
    id: 3, 
    name: "Rahul Mehta", 
   /* rank: "Rank 3",*/ 
    img: alumni3,
    achievement: "Cardiologist at AIIMS",
    batch: "2008 Batch",
    description: "Renowned cardiologist specializing in minimally invasive heart procedures. Awarded Best Young Doctor 2022."
  },
  { 
    id: 4, 
    name: "Priya Das", 
    /*rank: "Rank 4", */
    img: alumni4,
    achievement: "Entrepreneur - Founder of EduTech Startup",
    batch: "2015 Batch",
    description: "Founded 'LearnSmart', an edtech platform serving over 1 million students across India."
  }
];

const Alumni = () => {
  return (
    <>
      <Navbar />
      <div 
        className="alumni-container"
        style={{ backgroundImage: `url(${schoolImage})` }}
      >
        <div className="alumni-content">
          <div className="alumni-header">
            <h1 className="alumni-title">Our Proud Alumni</h1>
            <p className="alumni-subtitle">Celebrating the remarkable achievements of Greenfield Academy's distinguished alumni</p>
          </div>

          <div className="alumni-grid">
            {alumniData.map((alumnus) => (
              <div key={alumnus.id} className="alumni-card">
                <div className="alumni-image-section">
                  <img 
                    src={alumnus.img} 
                    alt={alumnus.name} 
                    className="alumni-img" 
                  />
                  <div className="rank-badge">{alumnus.rank}</div>
                </div>
                
                <div className="alumni-info-section">
                  <h3 className="alumni-name">{alumnus.name}</h3>
                  <p className="alumni-batch">{alumnus.batch}</p>
                  <p className="alumni-achievement">{alumnus.achievement}</p>
                  <p className="alumni-description">{alumnus.description}</p>
                  <div className="alumni-actions">
                    <button className="connect-btn">Connect</button>
                    <button className="profile-btn">View Profile</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="alumni-stats">
            <div className="stat-card">
              <span className="stat-number">500+</span>
              <span className="stat-label">Successful Alumni</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">50+</span>
              <span className="stat-label">Countries</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">100+</span>
              <span className="stat-label">Awards Won</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">25+</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Alumni;