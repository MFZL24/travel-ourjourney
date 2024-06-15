// src/components/BusPayment.js
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button, Image } from "react-bootstrap";
import bri from "../assets/img/payment/bri-logo.png";
import bni from "../assets/img/payment/bni.png";
import cimbniaga from "../assets/img/payment/cimb-niaga.jpeg";
import mandiri from "../assets/img/payment/mandiri.png";
import bca from "../assets/img/payment/bca.png";
import visa from "../assets/img/payment/visa.png";
import mastercard from "../assets/img/payment/master-card.png";
import americanexpress from "../assets/img/payment/american-express.jpeg";
import paypal from "../assets/img/payment/paypal.png";
import ovo from "../assets/img/payment/ovo.png";
import "../css/buspayment.css"; // Pastikan file CSS ini ada

const BusPayment = () => {
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
      <header className="header">
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

      <Container className="bus-payment mt-5 p-5">
        <Row>
          <Col md={8}>
            <Card className="mb-3 pb-3">
              <Card.Header>
                <h5>
                  <b>Select a Payment Method</b>
                </h5>
              </Card.Header>
              <Card.Body>
                <div className="payment-method p-2">
                  <div className="option-box">
                    <div className="option-text text-muted">
                      <span>Bank Transfer</span>
                    </div>
                    <div className="option-logos">
                      <Image src={bri} alt="BRI" className="bank-logo" />
                      <Image src={bni} alt="BNI" className="bank-logo" />
                      <Image src={cimbniaga} alt="CIMB Niaga" className="bank-logo" />
                      <Image src={mandiri} alt="Mandiri" className="bank-logo" />
                      <Image src={bca} alt="BCA" className="bank-logo" />
                    </div>
                  </div>
                </div>
                <div className="payment-method p-2">
                  <div className="option-box">
                    <div className="option-text text-muted">
                      <span>Credit/Debit Card</span>
                    </div>
                    <div className="option-logos">
                      <Image src={visa} alt="Visa" className="card-logo" />
                      <Image src={mastercard} alt="Mastercard" className="card-logo" />
                      <Image src={americanexpress} alt="American Express" className="card-logo" />
                      <Image src={paypal} alt="Paypal" className="card-logo" />
                    </div>
                  </div>
                </div>
                <div className="payment-method p-2">
                  <div className="option-box">
                    <div className="option-text text-muted">
                      <span>OVO</span>
                    </div>
                    <div className="option-logos">
                      <Image src={ovo} alt="OVO" className="ovo-logo" />
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
            <Button variant="primary" block>
              Pay
            </Button>
          </Col>

          <Col md={4}>
            <Card>
              <Card.Header>
                <h5>
                  <b>Price Details</b>
                </h5>
              </Card.Header>
              <Card.Body>
                <Row>
                  <Col>
                    <b>Ticket (1 adult)</b>
                  </Col>
                  <Col className="text-end">
                    <b>IDR 150,000</b>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <b>Baggage</b>
                  </Col>
                  <Col className="text-end">
                    <b>None</b>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col>
                    <b>Total</b>
                  </Col>
                  <Col className="text-end text-primary">
                    <b>IDR 150,000</b>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BusPayment;
