import "bootstrap/dist/css/bootstrap.min.css"; // Pastikan Bootstrap CSS diimpor
import React, { useState } from "react";
import "../../css/bus.css"; // Pastikan ini mengarah ke file CSS yang benar

const BUS = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 10000000]);

  const days = [
    { date: "Thu, Juni 18", price: 700000 },
    { date: "Fri, Juni 19", price: 750000 },
    { date: "Sat, Jun 20", price: 800000 },
    { date: "Sun, Jun 21", price: 900000 },
    { date: "Mon, Jun 22", price: 700000 },
    { date: "Tue, Jun 23", price: 700000 },
    { date: "Wed, Jun 24", price: 7000000 },
    { date: "Thu, Jun 25", price: 7000000 },
    { date: "Fri, Jun 26", price: 7500000 },
    { date: "Sat, Jun 27", price: 8000000 },
    { date: "Sun, Jun 28", price: 9000000 },
    { date: "Mon, Jun 29", price: 700000 },
  ];

  const busOptions = [
    { name: "PT Global Transport", time: "07:00", price: 200000 },
    { name: "PT Gunung Harta", time: "08:00", price: 250000 },
    { name: "PT Primadona", time: "09:00", price: 300000 },
    { name: "PT Harapan Jaya", time: "10:00", price: 350000 },
    { name: "PT Lorena", time: "11:00", price: 400000 },
  ];

  return (
    <div className="home-screen">
      <header className="header fixed-top">
        <div className="logo">
          <span>
            DESTINA<span>6</span>
          </span>
        </div>
        <nav className="nav-bar">
          <a href="/homescreen">Home</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
          <a href="/profile">My Profile</a>
        </nav>
      </header>

      <main className="container text-center mt-4">
        <div className="tab-navigation">
          <a href="/destinationUser">Destinations</a>
          <a href="/hotelUser">Hotels</a>
          <a href="/flightUser">Flight</a>
          <a href="#" className="bus">
            Bus
          </a>
        </div>
        <div className="search-form">
          <input type="text" placeholder="Destination" className="form-control me-2" />
          <input type="date" className="form-control me-2" />
          <input type="date" className="form-control me-2" />
          <input type="text" placeholder="1 room, 2 adults, 0 children" className="form-control me-2" />
          <button className="btn btn-dark">SEARCH</button>
        </div>

        <div className="bus-date">
          <div className="days-slider d-flex justify-content-between p-4 my-2">
            {days.map((day, index) => (
              <div key={index} className={`day-option ${selectedDay === day.date ? "selected" : ""}`} onClick={() => setSelectedDay(day.date)}>
                <p>{day.date}</p>
                <p>Rp {day.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bus-options-container d-flex justify-content-between mt-4">
          <div className="filters-container">
            <div className="price-range box">
              <h5>
                <b>
                  Price (Rp {priceRange[0].toLocaleString()} - Rp {priceRange[1].toLocaleString()})
                </b>
              </h5>
              <input type="range" min="0" max="10000000" step="100000" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], e.target.value])} className="form-range" />
              <div className="price-options d-flex flex-column">
                <button className="btn btn-dark mb-2" onClick={() => setPriceRange([0, 300000])}>
                  Rp 0 - Rp 300,000
                </button>
                <button className="btn btn-dark mb-2" onClick={() => setPriceRange([0, 5000000])}>
                  Rp 0 - Rp 5,000,000
                </button>
                <button className="btn btn-dark" onClick={() => setPriceRange([0, 10000000])}>
                  Rp 0 - Rp 10,000,000
                </button>
              </div>
            </div>
            <div className="bus-companies box mt-3">
              <h5>
                <b>All Bus Companies</b>
              </h5>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="busCompany1" />
                <label className="form-check-label" htmlFor="busCompany1">
                  PO Gunung Harta
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="busCompany2" />
                <label className="form-check-label" htmlFor="busCompany2">
                  PO Primadona
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="busCompany2" />
                <label className="form-check-label" htmlFor="busCompany2">
                  PO Sinar Jaya
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="busCompany2" />
                <label className="form-check-label" htmlFor="busCompany2">
                  PO Global Transport
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="busCompany2" />
                <label className="form-check-label" htmlFor="busCompany2">
                  PO Rukun Jaya
                </label>
              </div>
              {/* Add more bus companies as needed */}
            </div>
          </div>

          <div className="bus-options">
            <div className="bus-list mt-2">
              {busOptions.map((bus, index) => (
                <div key={index} className="bus-option align-items-center p-5 my-2">
                  <div className="bus-info align-items-center">
                    <h5>{bus.name}</h5>
                    <td>
                      <p>Keberangkatan {bus.time}</p>
                    </td>
                    <td>
                      <p>
                        <b>IDR {bus.price.toLocaleString()}</b>
                      </p>
                    </td>
                  </div>
                  <a href="/buspayment1" type="button" className="btn btn-primary">
                    Book
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BUS;
