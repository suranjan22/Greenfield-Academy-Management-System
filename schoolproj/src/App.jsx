import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import public components
import Login from "./components/Login";
import Signup from "./components/Signup";
import LandingPage from "./components/LandingPage";
import AdmissionForm from "./components/AdmissionForm";
import Alumni from "./components/Alumni";
import AboutUs from "./components/AboutUs";
import Announcement from "./components/Announcement";
import PaymentForm from "./components/PaymentForm";

// Import admin components
import AdminDashboard from "./components/admin/AdminDashboard";

// Import teacher components
import TeacherDashboard from "./components/TeacherDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Authentication Routes */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Public Routes */}
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/announcement" element={<Announcement />} />
        <Route path="/admission" element={<AdmissionForm />} />
        <Route path="/payment" element={<PaymentForm />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/aboutus" element={<AboutUs />} />
        
        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminDashboard />} />
        
        {/* Teacher Routes */}
        <Route path="/teacherdashboard" element={<TeacherDashboard />} />
        
        {/* Fallback Route */}
        <Route path="*" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;