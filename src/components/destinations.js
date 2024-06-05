import "bootstrap/dist/css/bootstrap.min.css"; // Pastikan Bootstrap CSS diimpor
import React, { useEffect, useState } from "react";
// import pandawaBeach from "../assets/img/homescreen/pandawa-beach.png";
// import hotel1 from "../assets/img/hotel/hotel-1.jpeg";
import destinations1 from "../assets/img/destinations/destinations-1.jpg";
import "../css/destinations.css"; // Pastikan ini mengarah ke file CSS yang benar

const Destinations = () => {
  const [background, setBackground] = useState("background1");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackground((prev) => {
        const nextBackground = (parseInt(prev.slice(-1), 10) % 5) + 1; // Rotasi dari background1 sampai background5
        return `background${nextBackground}`;
      });
    }, 5000); // Ganti background setiap 5 detik

    return () => clearInterval(intervalId);
  }, []);

  // const [priceRange, setPriceRange] = useState([0, 10000000]);
  const [setFilters] = useState({
    popular: [],
    facilities: [],
  });

  // const handlePriceChange = (e) => {
  //   setPriceRange([0, parseInt(e.target.value)]);
  // };

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

  return (
    <div className={`home-screen ${background}`}>
      <header className="header">
        <div className="logo">
          <span>
            DESTINA<span>6</span>
          </span>
        </div>
        <nav className="nav-bar">
          <a href="/homescreen">Home</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
          <a href="/signin">Sign in</a>
        </nav>
      </header>
      <main className="container text-center mt-4">
        {/* <h1 className="StartNew">
          We’re here to help<span>6</span>
        </h1> */}
        <div className="tab-navigation">
          <a href="/destinations">Destinations</a>
          <a href="/hotels">Hotels</a>
          <a href="/flights">Flight</a>
          <a href="/bus">Bus</a>
        </div>
        <div className="search-form">
          <input type="text" placeholder="Destination" className="form-control me-2" />
          <input type="date" className="form-control me-2" />
          <input type="date" className="form-control me-2" />
          <input type="text" placeholder="1 room, 2 adults, 0 children" className="form-control me-2" />
          <button className="btn btn-dark">SEARCH</button>
        </div>

        <div className="row">
          <div className="col-md-3">
            <div className="filter-section">
              <div className="popular">
                <h4>Popular Filters</h4>
                <label>
                  <input type="checkbox" name="popular" value="breakfast" onChange={handleFilterChange} /> Mountain
                </label>
                <br />
                <label>
                  <input type="checkbox" name="popular" value="payment" onChange={handleFilterChange} /> Ocean
                </label>
                <br />
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="destinations-list">
              <div className="destinations-card card mb-4">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src={destinations1} className="img-fluid rounded-start" alt="Destinations" />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title">Monumen Nasional</h3>
                      <div className="kota-text">
                        <h10 className="text-muted">Kawasan Monas 10110 Gambir Jakarta (show on map)</h10>
                      </div>
                      <div className="monas">
                        <h10>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          commodo consequat.
                        </h10>
                        <div className="d-flex justify-content-between align-items-center">
                          <button className="btn btn-outline-primary">Explore</button>
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

export default Destinations;
