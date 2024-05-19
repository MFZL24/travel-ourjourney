import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/welcome.css";
import "./homescreen";

const Welcome = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/homescreen'); // Ganti '/next-page' dengan path yang sesuai
  };

  return (
    <div className="welcome-screen">
      <h1>WELCOME TO DESTINA 6</h1>
      <p>Enjoy your holidays to an interesting place</p>
      <button onClick={handleGetStarted}>GET STARTED</button>
    </div>
  );
};

export default Welcome;

