import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import tailored from "../assets/img/service/tailored.png";
import expert from "../assets/img/service/expert.png";
import experience from "../assets/img/service/experience.png";
import seamless from "../assets/img/service/seamless.png";
import "../css/faq.css";

const FAQ = () => {
  const [background, setBackground] = useState("background1");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setBackground((prev) => {
        const nextBackground = (parseInt(prev.slice(-1), 10) % 5) + 1;
        return `background${nextBackground}`;
      });
    }, 5000);

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
          <a href="/homescreen">Home</a>
          <a className="faq" href="/faq">
            FAQ
          </a>
          <a href="/contact">Contact</a>
          <a href="/signin">Sign in</a>
        </nav>
      </header>
      <main className="container text-center mt-4">
        <h1 className="StartNew">
          We’re here to help<span>6</span>
        </h1>
        <div className="search-section ">
          <div className="pencarian justify-content-end ps-0">
            {/* <i class="bi bi-search">Search</i> */}
            <input type="text" placeholder="Search" className="form-control" />
          </div>
        </div>
        <div className="faq-section">
          <div className="faq-tittle">
            <h1>FAQ</h1>
          </div>
          <div className="faq-item">
            <p>How do I create an account in this app?</p>
            <button>+</button>
          </div>
          <div className="faq-item">
            <p>Do I need to pay to use this app?</p>
            <button>+</button>
          </div>
          <div className="faq-item">
            <p>How do I book a plane/hotel/tour ticket through this application?</p>
            <button>+</button>
          </div>
          <div className="faq-item">
            <p>What payment methods are available?</p>
            <button>+</button>
          </div>
          <div className="faq-item">
            <p>How do I book a flight/hotel/tour through this app?</p>
            <button>+</button>
          </div>
          <div className="faq-item">
            <p>Are there any cancellation fees?</p>
            <button>+</button>
          </div>
          <div className="faq-item">
            <p>Is this app available in multiple languages?</p>
            <button>+</button>
          </div>
          <div className="faq-item">
            <p>Can I get help if there are problems with my trip?</p>
            <button>+</button>
          </div>
          <div className="faq-item">
            <p>How do I create an account in this app?</p>
            <button>+</button>
          </div>
          <div className="still-stuck">
            <br></br>
            <p>
              <b>Still Stuck? Help is a mall away</b>
            </p>
          </div>
          <div className="send-message">
            <a href="contact" className="btn btn-danger">
              Send a Message
            </a>
          </div>
        </div>
      </main>

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
    </div>
  );
};

export default FAQ;
