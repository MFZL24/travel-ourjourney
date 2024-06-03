import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import pandawaBeach from "../assets/img/homescreen/pandawa-beach.png";
import "../css/Hotels.css";

const Hotels = () => {
  const [priceRange, setPriceRange] = useState([0, 10000000]);
  const [filters, setFilters] = useState({
    popular: [],
    facilities: [],
  }); 
  const [hotels,] = useState([
    {
      id: 1,
      name: "Pandawa Beach Hotel",
      rating: 4.0,
      location: "Near Kuta Beach - Kuta",
      roomInfo: "Standard Room, Breakfast Included",
      price: 1500000,
      discount: "20%",
      facilities: ["wifi", "pool"],
    },
    // Tambahkan data hotel lainnya di sini
  ]);

  // eslint-disable-next-line no-unused-vars
  const handlePriceChange = (e) => {
    setPriceRange([0, parseInt(e.target.value)]);
  };

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;
    setFilters((prevFilters) => {
      if (checked) {
        return {
          ...prevFilters,
          [name]: [...prevFilters[name], value],
        };
      } else {
        return {
          ...prevFilters,
          [name]: prevFilters[name].filter((filter) => filter !== value),
        };
      }
    });
  };

  const filteredHotels = hotels.filter((hotel) => {
    const matchesPriceRange = hotel.price <= priceRange[1];
    const matchesPopularFilters = filters.popular.every((filter) =>
      hotel.facilities.includes(filter)
    );
    const matchesFacilitiesFilters = filters.facilities.every((filter) =>
      hotel.facilities.includes(filter)
    );
    return matchesPriceRange && matchesPopularFilters && matchesFacilitiesFilters;
  });

  return (
    <div className="home-screen">
      <header className="header">
        <div className="logo">
          <span>
            DESTINA<span>6</span>
          </span>
        </div>
        <nav className="nav-bar">
          <a href="/">Home</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
          <a href="/signin">Sign in</a>
        </nav>
      </header>
      <main className="container mt-4">
        <div className="tab-navigation mb-4">
          <a href="/destinations">Destinations</a>
          <a href="/hotels">Hotels</a>
          <a href="/flights">Flight</a>
          <a href="/bus">Bus</a>
        </div>
        <div className="search-form mb-4">
          <input type="text" placeholder="Destination" className="form-control me-2" />
          <input type="date" className="form-control me-2" />
          <input type="date" className="form-control me-2" />
          <input type="text" placeholder="1 room, 2 adults, 0 children" className="form-control me-2" />
          <button className="btn btn-dark">SEARCH</button>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="filter-section">
              <h4>Price (Rp 0 - Rp 10,000,000+)</h4>
              <input type="range" min="0" max="10000000" step="50000" value={priceRange[1]} onChange={handlePriceChange} className="form-range" />
              <p>Up to: Rp {priceRange[1].toLocaleString()}</p>
              <div className="price-options">
                <label>
                  <input type="radio" name="price" value="0-300000" onChange={handlePriceChange} /> Rp 0 - Rp 300,000
                </label>
                <br />
                <label>
                  <input type="radio" name="price" value="0-5000000" onChange={handlePriceChange} /> Rp 0 - Rp 5,000,000
                </label>
                <br />
                <label>
                  <input type="radio" name="price" value="0-10000000" onChange={handlePriceChange} /> Rp 0 - Rp 10,000,000
                </label>
              </div>
              <h4>Popular Filters</h4>
              <label>
                <input type="checkbox" name="popular" value="breakfast" onChange={handleFilterChange} /> Breakfast Included
              </label>
              <br />
              <label>
                <input type="checkbox" name="popular" value="payment" onChange={handleFilterChange} /> Only Payment
              </label>
              <br />
              <label>
                <input type="checkbox" name="popular" value="payAtHotel" onChange={handleFilterChange} /> Pay at Hotel
              </label>
              <br />
              <label>
                <input type="checkbox" name="popular" value="singleBed" onChange={handleFilterChange} /> Single Bed
              </label>
              <br />
              <label>
                <input type="checkbox" name="popular" value="doubleBed" onChange={handleFilterChange} /> Double Bed
              </label>
              <h4>Facilities</h4>
              <label>
                <input type="checkbox" name="facilities" value="wifi" onChange={handleFilterChange} /> WiFi
              </label>
              <br />
              <label>
                <input type="checkbox" name="facilities" value="pool" onChange={handleFilterChange} /> Swimming Pool
              </label>
              <br />
              <label>
                <input type="checkbox" name="facilities" value="parking" onChange={handleFilterChange} /> Parking
              </label>
              <br />
              <label>
                <input type="checkbox" name="facilities" value="restaurant" onChange={handleFilterChange} /> Restaurant
              </label>
              <br />
              <label>
                <input type="checkbox" name="facilities" value="elevator" onChange={handleFilterChange} /> Elevator
              </label>
            </div>
          </div>
          <div className="col-md-9">
            <div className="hotel-list">
              {filteredHotels.map((hotel) => (
                <div key={hotel.id} className="hotel-card card mb-4">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img src={pandawaBeach} className="img-fluid rounded-start" alt="Hotel" />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{hotel.name}</h5>
                        <p className="card-text">Rating: {hotel.rating}/5 - Very Good</p>
                        <p className="card-text">
                          <small className="text-muted">
                            <i className="bi bi-geo-alt"></i> {hotel.location}
                          </small>
                        </p>
                        <div className="room-info bg-light p-2 mb-2">
                          <p>{hotel.roomInfo}</p>
                          <p>Discount: {hotel.discount}</p>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                          <h6>Price: Rp {hotel.price.toLocaleString()}</h6>
                          <button className="btn btn-primary">Book Now</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Tambahkan lebih banyak kartu hotel jika diperlukan */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hotels;
