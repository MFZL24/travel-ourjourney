// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import HomeScreen from "./components/homescreen"; // Pastikan import ini benar
import SplashScreen from "./components/splashscreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/homescreen" element={<HomeScreen />} />
      {/* Tambahkan route lain sesuai kebutuhan */}
    </Routes>
  );
}
export default App;
