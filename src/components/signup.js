import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate for navigation in React Router v6
import "../css/signup.css";

export default function Signup(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi form
    if (
      !firstName ||
      !lastName ||
      !username ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setError("Please fill in all fields");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Kirim data signup ke server
    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          username,
          email,
          password,
        }),
      });

      if (response.ok) {
        console.log("User signed up successfully");
        // Redirect user to login page or display success message
        navigate("/signin");
      } else {
        const data = await response.json();
        setError(data.message); // Tampilkan pesan kesalahan dari server
      }
    } catch (error) {
      console.error("Error signing up:", error);
      setError("An error occurred, please try again.");
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 col-md-6 intro-section">
          {/* You can add an introductory image or text here */}
        </div>
        <div className="col-sm-6 col-md-6 form-section mt-5">
          <div className="login-wrapper">
            <h2 className="login-title tittlelogin">
              <u> Sign Up </u>
            </h2>
            <form onSubmit={handleSubmit}>
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="input-group">
                <input
                  type="text"
                  name="first"
                  id="first"
                  className="form-control"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  name="last"
                  id="last"
                  className="form-control"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="form-control"
                  placeholder="Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="form-group mb-3">
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="form-control"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>

              <div className="form-check mb-4">
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  I agree to the terms and conditions as set out by the user
                  agreement.
                </label>
              </div>

              <div className="d-flex justify-content-between align-items-center mb-3">
                <button type="submit" className="btn login-btn">
                  Sign Up
                </button>
              </div>
              <center>
                <a href="/signin" className="textlog">
                  Already have an account?
                </a>
              </center>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
