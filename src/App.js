// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import Faq from "./components/faq";
import HomeScreen from "./components/homescreen"; // Pastikan import ini benar
import Hotels from "./components/hotels";
import SplashScreen from "./components/splashscreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/homescreen" element={<HomeScreen />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/faq" element={<Hotels/>} />
      {/* Tambahkan route lain sesuai kebutuhan */}
    </Routes>
  );
}
export default App;
