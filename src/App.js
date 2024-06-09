// src/App.js
import React from "react";
import { Route, Routes } from "react-router-dom";
import Welcome from "./components/Welcome";
import Bus from "./components/bus";
import Contact from "./components/contact";
import Destinations from "./components/destinations";
import Faq from "./components/faq";
import Flights from "./components/flights";
import HomeScreen from "./components/homescreen"; // Pastikan import ini benar
import Hotels from "./components/hotels";
import Signin from "./components/signin";
import Signup from "./components/signup";
import SplashScreen from "./components/splashscreen";
import Bus from "./components/bus";
import BusPayment1 from "./components/buspayment1";
import BusPayment2 from "./components/buspayment2";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/homescreen" element={<HomeScreen />} />
      <Route path="/faq" element={<Faq />} />
      <Route path="/hotels" element={<Hotels/>} />
      <Route path="/bus" element={<Bus/>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/destinations" element={<Destinations/>} />
      <Route path="/flights" element={<Flights/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/bus" element={<Bus />} />
      <Route path="/buspayment1" element={<BusPayment1 />} />
      <Route path="/buspayment2" element={<BusPayment2 />} />
      {/* Tambahkan route lain sesuai kebutuhan */}
    </Routes>
  );
}
export default App;
