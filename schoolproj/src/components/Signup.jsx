import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/css/login.css";
import schoolImage from "../assets/images/school.jpg";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8083/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name: user.name,
          email: user.email,
          password: user.password,
          role: user.role,
        }),
      });

      const data = await response.text();
      alert(data);
      navigate("/");
    } catch (error) {
      alert("❌ Registration failed!");
      console.error(error);
    }
  };

  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${schoolImage})` }}
    >
      <div className="login-box">
        <h2>Create an Account</h2>
        <form onSubmit={handleSignup}>
          <select
            value={user.role}
            onChange={(e) => setUser({ ...user, role: e.target.value })}
            className="role-select"
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
            <option value="admin">Admin</option>
          </select>

          <input
            type="text"
            placeholder="Full Name"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            required
          />

          <button type="submit">Sign Up</button>
        </form>

        <p>
          Already have an account?{" "}
          <span onClick={() => navigate("/")}>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
