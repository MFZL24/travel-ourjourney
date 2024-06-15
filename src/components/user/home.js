import "bootstrap/dist/css/bootstrap.min.css"; // Pastikan Bootstrap CSS diimpor
import React, { useEffect, useState } from "react";
import pandawaBeach from "../../assets/img/destinasi/pandawa-beach.png";
import monumenNasional from "../../assets/img/destinasi/monas.jpg";
import ancolDreamland from "../../assets/img/destinasi/ancol.jpeg";
import tailored from "../../assets/img/service/tailored.png";
import expert from "../../assets/img/service/expert.png";
import experience from "../../assets/img/service/experience.png";
import seamless from "../../assets/img/service/seamless.png";
import "../../css/homescreen.css"; // Pastikan ini mengarah ke file CSS yang benar

const HomeScreen = () => {
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

  return (
    <div className={`home-screen ${background}`}>
      <header className="header fixed-top">
        <div className="logo">
          <span>
            DESTINA<span>6</span>
          </span>
        </div>
        <nav className="nav-bar">
          <a className="home" href="/">
            Home
          </a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
          <a href="/profile"> My Profile</a>
        </nav>
      </header>
      <main className="container text-center mt-4">
        <h5 className="StartNew">
          Welcome! <br /> START YOUR TRIP with TRAVEL<span>6</span>
        </h5>
        <div className="tab-navigation">
          <a href="/destinationUser">Destinations</a>
          <a href="/hotelUser">Hotels</a>
          <a href="/flightUSer">Flight</a>
          <a href="/busUSer">Bus</a>
          {/* <a href="/history">History</a> */}
        </div>
        <div className="search-form">
          <input type="text" placeholder="Destination" className="form-control me-2" />
          <input type="date" className="form-control me-2" />
          <input type="date" className="form-control me-2" />
          <input type="text" placeholder="1 room, 2 adults, 0 children" className="form-control me-2" />
          <button className="btn btn-dark">SEARCH</button>
        </div>

        <section className="recommended-sectio">
          <div className="card-group mt-3">
            <div class="card border border-0 p-4">
              <img src={pandawaBeach} alt="Pandawa Beach" className="img-fluid rounded-3" />
              <div class="card-body">
                <h5 class="card-title">PANDAWA BEACH</h5>
                <p class="card-text">Pandawa Beach is one of the popular natural tourist destinations located in Bali Province.</p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
                <a href="/destinationUser" type="button" className="btn btn-primary">
                  Show More
                </a>
              </div>
            </div>
            <div class="card border border-0 p-4">
              <img src={ancolDreamland} alt="Ancol Dreamland" className="img-fluid rounded-3" />
              <div class="card-body">
                <h5 class="card-title">Ancol Dreamland</h5>
                <p class="card-text">Ancol Dreamland is Jakarta's premier recreational complex, located along the waterfront.</p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
                <a href="/destinationUser" type="button" className="btn btn-primary">
                  Show More
                </a>
              </div>
            </div>
            <div class="card border border-0 p-4">
              <img src={monumenNasional} alt="Monumen Nasional" className="img-fluid rounded-3" />
              <div class="card-body">
                <h5 class="card-title">Monas (Monumen Nasional)</h5>
                <p class="card-text">The National Monument (Monas) is a 132 meter (433 foot) high memorial monument. </p>
                <p class="card-text">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </p>
                <a href="/detailDestinationUser" type="button" className="btn btn-primary">
                  Show More
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="services-section">
          <h2>
            <b> We Offer Best Services</b>
          </h2>
          <div className="services-container">
            <div className="service-box">
              <img src={tailored} alt="Tailored itineraries" />
              <h3>
                <b>Tailored itineraries</b>
              </h3>
              <p>Crafted to your preferences, our custom itineraries ensure every journey aligns with your unique travel style.</p>
            </div>
            <div className="service-box">
              <img src={expert} alt="Expert Guides" />
              <h3>
                <b> Expert Guides </b>
              </h3>
              <p>Our experienced guides lead you through immersive experiences, revealing the hidden gems and local secrets of each destination.</p>
            </div>
            <div className="service-box">
              <img src={experience} alt="Exclusive Experiences" />
              <h3>
                <b>Exclusive Experiences</b>
              </h3>
              <p>Access exclusive events, private tours, and VIP treatment, creating unforgettable memories tailored just for you.</p>
            </div>
            <div className="service-box">
              <img src={seamless} alt="Seamless Travel Planning" />
              <h3>
                <b> Seamless Travel Planning</b>
              </h3>
              <p>From booking flights to arranging accommodations and activities, we handle every detail so you can relax and enjoy the journey stress-free.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomeScreen;
