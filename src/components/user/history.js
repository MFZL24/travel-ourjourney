// src/components/BusPayment.js
import React from "react";
import { Container, Row, Col, Card, Form, Button, Image } from "react-bootstrap";
// import user1 from "../../assets/img/user/user-logo.png";
import profile1 from "../../assets/img/1.jpg";
import "../../css/history.css"; // Pastikan file CSS ini ada

const History = () => {
  return (
    <div className="home-screen">
      <header className="header fixed-top">
        <div className="logo">
          <span>
            DESTINA<span>6</span>
          </span>
        </div>
        <nav className="nav-bar">
          <a href="/homeUser">Home</a>
          <a href="/faq">FAQ</a>
          <a href="/contact">Contact</a>
          <a href="/profile">My Profile</a>
        </nav>
      </header>

      <main className="container mt-4">
        {/* <div className="tab-navigation">
          <a href="/destinationUser">Destinations</a>
          <a href="/hotelUser">Hotels</a>
          <a href="/flightUser">Flight</a>
          <a href="/busUser">Bus</a>
        </div>
        <div className="search-form mb-4">
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" placeholder="Search History" />
          <button className="btn btn-dark">SEARCH</button>
        </div> */}

        <Container className="history-container">
          <Row className="history-title mb-4 ">
            <h2>
              <b>Riwayat Pesanan</b>
            </h2>
          </Row>
          <Row className="order-card mb-4">
            <Col className="order-info p-3">
              <Row>
                <Col xs={2}>
                  <Image src={profile1} roundedCircle className="user-logo" />
                </Col>
                <Col xs={8}>
                  <h5>
                    <b>Miranda</b>
                  </h5>
                  <h5>
                    <b>Rp 750.000</b>
                  </h5>
                  <p className="text-muted">Penumpang</p>
                </Col>
                <Col xs={2} className="text-end">
                  <p>15 Mei 2024</p>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col className="text-start">
                  <p className="text-muted">
                    <b>Hlp Jakarta Halim Perdana Kusuma Internasional Airport</b>
                  </p>
                </Col>
                <Col className="text-end">
                  <p className="text-muted">
                    <b>KNO Medan Kualanamu Internasional Airport</b>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="order-card mb-4">
            <Col className="order-info p-3">
              <Row>
                <Col xs={2}>
                  <Image src={profile1} roundedCircle className="user-logo" />
                </Col>
                <Col xs={8}>
                  <h5>
                    <b>Miranda</b>
                  </h5>
                  <h5>
                    <b>Rp 750.000</b>
                  </h5>
                  <p className="text-muted">Penumpang</p>
                </Col>
                <Col xs={2} className="text-end">
                  <p>23 Mei 2024</p>
                </Col>
              </Row>
              <hr />
              <Row>
                <Col className="text-start">
                  <p className="text-muted">
                    <b>Semarang</b>
                  </p>
                </Col>
                <Col className="text-end">
                  <p className="text-muted">
                    <b>Surabaya</b>
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};

export default History;
