import "bootstrap/dist/css/bootstrap.min.css"; // Pastikan Bootstrap CSS diimpor
import React, { useEffect, useState } from "react";
import contact from "../assets/img/contact.png";
import "../css/contact.css"; // Pastikan ini mengarah ke file CSS yang benar
import { Container, Row, Col, Form, Button, Image } from "react-bootstrap";

const Contact = () => {
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
      <header className="header ">
        <div className="logo">
          <span>
            DESTINA<span>6</span>
          </span>
        </div>
        <nav className="nav-bar">
          <a href="homescreen">Home</a>
          <a href="/faq">FAQ</a>
          <a className="contact" href="/contact">
            Contact
          </a>
          <a href="/signin">Sign in</a>
        </nav>
      </header>

      <Container className="contact-container mt-4">
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div className="contact-card">
              <Image src={contact} className="contact-image mb-4" />
              <Form>
                <Form.Group controlId="formName" className="mb-5">
                  <Form.Control type="text" placeholder="Name" />
                </Form.Group>
                <Form.Group controlId="formEmail" className="mb-5">
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group controlId="formTelephone" className="mb-5">
                  <Form.Control type="text" placeholder="Telephone" />
                </Form.Group>
                <Form.Group controlId="formMessage" className="mb-5">
                  <Form.Control as="textarea" rows={3} placeholder="Message" />
                </Form.Group>
                <Button variant="primary" type="submit" className="send-message-button">
                  Send Message
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Contact;
