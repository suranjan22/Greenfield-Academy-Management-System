import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
// Define navigation items with their correct paths
  const navItems = [
    { name: "Admission", path: "/admission" },
    { name: "Announcement", path: "/announcement" },
    { name: "Payment", path: "/payment" }, // ✅ Fixed: Added Payment with correct path
    { name: "Alumni", path: "/alumni" },
    { name: "About Us", path: "/aboutus" }
  ];

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => navigate("/landing")}>
          <span className="logo-text">Greenfield Academy</span>
        </div>

        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          {["Admission", "Announcement", "Payment", "Alumni", "About Us"].map(
            (item) => (
              <li key={item} onClick={() => navigate(`/${item.toLowerCase().replace(" ", "")}`)}>
                <span>{item}</span>
              </li>
            )
          )}
          <li className="logout" onClick={() => navigate("/")}>Logout</li>
        </ul>

        <div
          className={`menu-toggle ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span><span></span><span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
