// src/Payment.js
import React, { useEffect, useState } from "react";
import "../css/hotelpayment.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const HotelPayment = () => {
  const [background, setBackground] = useState("background1");
  const [activeSection, setActiveSection] = useState("book");

  const handleScroll = () => {
    const section = window.scrollY > 50 ? "pay" : "book";
    setActiveSection(section);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <div className={`payment-screen ${background}`}>
      <header className="header fixed-top">
        <div className="logo">
          <span>
            DESTINA<span>6</span>
          </span>
        </div>
        <nav className="nav-bar">
          <div className={`nav-item ${activeSection === "book" ? "active" : ""}`}>Book</div>
          <div className="separator">|</div>
          <div className={`nav-item ${activeSection === "pay" ? "active" : ""}`}>Pay</div>
        </nav>
      </header>

      <Container className="payment-container mt-2 ">
        <div className="transparent-box">
          <h5>
            <b>Your Accommodation Booking</b>
          </h5>
          <p className="text-muted">Make sure all the details on this page are correct before proceeding to payment.</p>

          <div className="info-box">
            <h5>
              <b>Guest Info</b>
            </h5>
            <p className="text-muted">Guest name must match the vaild ID which will be used at check-in.</p>
            <Form>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formFirstName" className="mb-3">
                    <Form.Control type="text" placeholder="First Name" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formLastName" className="mb-3">
                    <Form.Control type="text" placeholder="Last Name" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group controlId="formPhoneNumber" className="mb-3">
                    <Form.Control type="text" placeholder="Phone Number" />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>

          <div className="price-box mt-4">
            <h5>
              <b>Price Detail</b>
            </h5>
            <Row className="text-muted">
              <Col>Room Price</Col>
              <Col className="text-end">IDR 210,000</Col>
            </Row>
            <Row className="text-muted">
              <Col>Taxes and Fees</Col>
              <Col className="text-end">IDR 21.000</Col>
            </Row>
            <hr />
            <Row>
              <Col className="text-danger">
                <b>Total Price</b>
              </Col>
              <Col className="text-end">
                <b>IDR 231,000</b>
              </Col>
            </Row>
          </div>

          <div className="button-box mt-2">
            <Button variant="primary" className="me-2">
              <b>Continue to Payment</b>
            </Button>
            <Button className="mt-2" href="/hotelUser" variant="danger" block>
              <b>Cancel</b>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HotelPayment;
