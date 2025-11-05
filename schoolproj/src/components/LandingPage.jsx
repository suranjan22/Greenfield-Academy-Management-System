import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../assets/css/landing.css";
import img1 from "../assets/images/school.jpg";
import img2 from "../assets/images/students.jpg";
import img3 from "../assets/images/campus.jpg";
import img4 from "../assets/images/activities.jpg";
import img5 from "../assets/images/primaryedu.jpg";
import img6 from "../assets/images/secondaryedu.jpg";
import img7 from "../assets/images/seniorsecondary.jpg";

// Import React Icons
import { 
  FaGraduationCap, 
  FaBasketballBall, 
  FaFlask, 
  FaGlobeAmericas, 
  FaHeart, 
  FaChartLine 
} from "react-icons/fa";

const images = [img1, img2, img3, img4, img5, img6, img7];

const LandingPage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImage((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <div className="landing-page">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-slider">
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Slide ${i}`}
                className={`slide ${i === currentImage ? "active" : ""}`}
              />
            ))}
          </div>
          <div className="hero-overlay">
            <h1>Welcome to Greenfield Academy</h1>
            <p>Where Knowledge Meets Character and Excellence Begins</p>
            <div className="hero-buttons">
              <button>Explore Campus</button>
              <button className="outline">Apply Now</button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="about">
          <div className="about-content">
            <div className="about-text">
              <h2>About Greenfield Academy</h2>
              <p>
                Founded in 1998, Greenfield Academy is a premier institution that focuses on 
                holistic education — balancing academics, sports, arts, and character building. 
                Our mission is to create global citizens equipped with wisdom, empathy, and leadership.
              </p>
              <button className="learn-btn" onClick={() => navigate("/aboutus")}>Learn More</button>
            </div>
            <div className="about-image">
              <img src={img3} alt="Campus" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="features-header">
            <h2>Why Choose Greenfield Academy?</h2>
            <p>Discover what makes us the preferred choice for quality education</p>
          </div>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-wrapper">
                  <FaGraduationCap />
                </div>
              </div>
              <h3>Academic Excellence</h3>
              <p>Experienced faculty with 98% success in national and international exams, ensuring top-tier education.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-wrapper">
                  <FaBasketballBall />
                </div>
              </div>
              <h3>Holistic Development</h3>
              <p>Sports, music, drama, and leadership clubs that shape well-rounded individuals and future leaders.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-wrapper">
                  <FaFlask />
                </div>
              </div>
              <h3>Innovation Labs</h3>
              <p>State-of-the-art STEM facilities with coding clubs, robotics, and hands-on scientific exploration.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-wrapper">
                  <FaGlobeAmericas />
                </div>
              </div>
              <h3>Global Exposure</h3>
              <p>International student exchange programs and collaborations with top institutions worldwide.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-wrapper">
                  <FaHeart />
                </div>
              </div>
              <h3>Character Building</h3>
              <p>Focus on moral values, empathy, and social responsibility to develop compassionate citizens.</p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <div className="icon-wrapper">
                  <FaChartLine />
                </div>
              </div>
              <h3>Career Guidance</h3>
              <p>Comprehensive career counseling and mentorship programs for successful future planning.</p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="programs">
          <h2>Our Programs</h2>
          <div className="program-grid">
            <div className="program-card">
              <img src={img5} alt="Primary" />
              <h3>Primary Education</h3>
              <p>Interactive learning and foundation-building for lifelong curiosity.</p>
            </div>
            <div className="program-card">
              <img src={img6} alt="Secondary" />
              <h3>Secondary Education</h3>
              <p>Strong academic focus with mentoring and career guidance.</p>
            </div>
            <div className="program-card">
              <img src={img7} alt="Higher Secondary" />
              <h3>Senior Secondary</h3>
              <p>Preparation for competitive exams, global entrance tests, and leadership roles.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <h2>What Our Students Say</h2>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <p>"Greenfield taught me not just academics, but discipline and confidence for life."</p>
              <h4>– Aarav Sharma, Batch 2023</h4>
            </div>
            <div className="testimonial-card">
              <p>"The teachers here inspire us to think beyond textbooks and dream big."</p>
              <h4>– Sneha Patel, Batch 2024</h4>
            </div>
            <div className="testimonial-card">
              <p>"From science fairs to theatre, every day is a new opportunity to grow."</p>
              <h4>– Rohan Das, Batch 2022</h4>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="cta">
          <h2>Join Our Academic Family</h2>
          <p>Admissions Open for 2025–26</p>
          <div className="cta-buttons">
            <button>Schedule a Visit</button>
            <button className="outline">Download Brochure</button>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default LandingPage;