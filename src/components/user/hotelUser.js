import "bootstrap/dist/css/bootstrap.min.css"; // Pastikan Bootstrap CSS diimpor
// import React from "react";
// import pandawaBeach from "../assets/img/homescreen/pandawa-beach.png";
import hotel1 from "../../assets/img/hotels/hotel-1.jpeg";
import "../../css/hotels.css"; // Pastikan ini mengarah ke file CSS yang benar
import React, { useState } from "react";

const HotelsUser = () => {
  const [priceRange, setPriceRange] = useState([0, 10000000]);
  const [setFilters] = useState({
    popular: [],
    facilities: [],
  });

  // const handlePriceChange = (e) => {
  //   setPriceRange([0, parseInt(e.target.value)]);
  // };

  // const handleFilterChange = (e) => {
  //   const { name, value, checked } = e.target;
  //   setFilters((prevFilters) => {
  //     if (checked) {
  //       return {
  //         ...prevFilters,
  //         [name]: [...prevFilters[name], value],
  //       };
  //     } else {
  //       return {
  //         ...prevFilters,
  //         [name]: prevFilters[name].filter((filter) => filter !== value),
  //       };
  //     }
  //   });
  // };

  return (
    <div className="home-screen">
      <header className="header fixed-top">
        <div className="logo">
          <span>
            DESTINA<span>6</span>
          </span>
        </div>
        <nav className="nav-bar">
          <a href="homeUser">Home</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
          <a href="/profile">My Profile</a>
        </nav>
      </header>

      <main className="container mt-4">
        <div className="tab-navigation ">
          <a href="/destinationUser">Destinations</a>
          <a href="#" className="hotel">
            Hotels
          </a>
          <a href="/flightUser">Flight</a>
          <a href="/busUser">Bus</a>
        </div>

        <div className="search-form mb-4">
          <input type="text" placeholder="Destination" className="form-control me-2" />
          <input type="date" className="form-control me-2" />
          <input type="date" className="form-control me-2" />
          <input type="text" placeholder="1 room, 2 adults, 0 children" className="form-control me-2" />
          <button className="btn btn-dark">SEARCH</button>
        </div>

        <div className="row">
          <div className="col-md-3 ">
            <div className="filter-section ">
              <div className="price">
                <h5>
                  <b>
                    Price (Rp {priceRange[0].toLocaleString()} - Rp {priceRange[1].toLocaleString()})
                  </b>
                </h5>
                <input type="range" min="0" max="10000000" step="100000" value={priceRange[1]} onChange={(e) => setPriceRange([priceRange[0], e.target.value])} className="form-range" />
                <div className="price-options d-flex flex-column">
                  <button className="btn btn-dark mb-1" onClick={() => setPriceRange([0, 300000])}>
                    Rp 0 - Rp 300,000
                  </button>
                  <button className="btn btn-dark mb-1" onClick={() => setPriceRange([0, 5000000])}>
                    Rp 0 - Rp 5,000,000
                  </button>
                  <button className="btn btn-dark mb-1" onClick={() => setPriceRange([0, 10000000])}>
                    Rp 0 - Rp 10,000,000
                  </button>
                </div>
              </div>
            </div>

            <div className="filter-section mt-2">
              <div className="popular">
                <h5>
                  <b>Popular Filters</b>
                </h5>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="busCompany1" />
                  <label className="form-check-label" htmlFor="busCompany1">
                    Breakfast Included
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="busCompany2" />
                  <label className="form-check-label" htmlFor="busCompany2">
                    Only Payment
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="busCompany2" />
                  <label className="form-check-label" htmlFor="busCompany2">
                    Pay at Hotel
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="busCompany2" />
                  <label className="form-check-label" htmlFor="busCompany2">
                    Single Bed
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="busCompany2" />
                  <label className="form-check-label" htmlFor="busCompany2">
                    Double Bed
                  </label>
                </div>
                {/* Add more bus companies as needed */}
              </div>
            </div>

            <div className="filter-section mt-2">
              <div className="facilities">
                <h5>
                  <b>Facilities</b>
                </h5>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="busCompany1" />
                  <label className="form-check-label" htmlFor="busCompany1">
                    WiFi
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="busCompany2" />
                  <label className="form-check-label" htmlFor="busCompany2">
                    Swimming Pool
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="busCompany2" />
                  <label className="form-check-label" htmlFor="busCompany2">
                    Parking
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="busCompany2" />
                  <label className="form-check-label" htmlFor="busCompany2">
                    Restaurant
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" value="" id="busCompany2" />
                  <label className="form-check-label" htmlFor="busCompany2">
                    Elevator
                  </label>
                </div>
                {/* Add more bus companies as needed */}
              </div>
            </div>
          </div>

          <div className="col-md-9">
            <div className="hotel-list">
              <div className="hotel-card card mb-4">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={hotel1} className="img-fluid rounded-start" alt="Hotel" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title">
                        <b>Pandawa Beach Hotel</b>
                      </h3>
                      <div className="d-flex justify-content-left align-items-center">
                        <a className="btn btn-warning">☆☆☆☆☆</a>
                        <h10 className="card-text">Very Good</h10>
                      </div>

                      <div className="kota-text d-flex grid gap-2">
                        <p className="text-muted">Near Kuta Beach - Kuta</p>
                        <p className="map">Show on Map</p>
                        <br />
                      </div>

                      <div className="row room-info p-2 mb-2">
                        <div className="col-7 left">
                          <div>
                            <h10>Type Room : Standard Room</h10>
                          </div>
                          <div>
                            <h10>Benefit : Breakfast Included</h10>
                          </div>
                          <div className="red">
                            <h10>Facility : Only 1 room left, bathroom</h10>
                          </div>
                        </div>

                        <div className="col-5 right">
                          <a className="btn btn-danger mb-3">20% OFF</a>
                          <h5 className="mb-3">
                            <b>Price: Rp 1,500,000</b>
                          </h5>
                          <div className="d-flex justify-content-end align-items-center">
                            <a href="/hotelpayment" className="btn btn-primary ">
                              Book Now
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add more hotel cards as needed */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HotelsUser;
