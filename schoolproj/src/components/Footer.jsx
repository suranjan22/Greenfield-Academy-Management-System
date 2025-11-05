import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import "../assets/css/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Admissions", path: "/admissions" },
    { label: "Events", path: "/events" },
    { label: "Gallery", path: "/gallery" },
    { label: "Parent Portal", path: "/parent-portal" }
  ];

  const resources = [
    { label: "Library", path: "/library" },
    { label: "Student Zone", path: "/student-zone" },
    { label: "Faculty Access", path: "/faculty-access" },
    { label: "Transport Info", path: "/transport" }
  ];

  const socialMedia = [
    { 
      icon: <FaFacebookF />, 
      label: "Facebook", 
      url: "https://facebook.com/greenfieldacademy" 
    },
    { 
      icon: <FaInstagram />, 
      label: "Instagram", 
      url: "https://instagram.com/greenfieldacademy" 
    },
    { 
      icon: <FaTwitter />, 
      label: "Twitter", 
      url: "https://twitter.com/greenfieldacademy" 
    },
    { 
      icon: <FaYoutube />, 
      label: "YouTube", 
      url: "https://youtube.com/greenfieldacademy" 
    }
  ];

  const renderLinkList = (items) => (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          <a href={item.path} className="footer-link">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-top">
        <div className="footer-col">
          <h3 className="footer-logo">Greenfield Academy</h3>
          <p className="footer-description">
            Building futures since 1975 through excellence in education and character development.
          </p>
          <address className="footer-contact">
            <p>
              <FaMapMarkerAlt className="contact-icon" />
              123 Education Road, Kolkata, West Bengal 700001
            </p>
            <p>
              <FaPhone className="contact-icon" />
              +91 98765 43210
            </p>
            <p>
              <FaEnvelope className="contact-icon" />
              <a href="mailto:info@greenfield.edu" className="footer-link">
                info@greenfield.edu
              </a>
            </p>
          </address>
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          {renderLinkList(quickLinks)}
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading">Resources</h4>
          {renderLinkList(resources)}
        </div>
        
        <div className="footer-col">
          <h4 className="footer-heading">Connect With Us</h4>
          <div className="social-links" aria-label="Social media links">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="social-link"
                aria-label={social.label}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="newsletter-signup">
            <p>Subscribe to our newsletter</p>
            <button className="newsletter-btn">Subscribe</button>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Greenfield Academy. All Rights Reserved.</p>
          <div className="footer-legal">
            <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
            <a href="/terms-of-service" className="footer-link">Terms of Service</a>
            <a href="/sitemap" className="footer-link">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;