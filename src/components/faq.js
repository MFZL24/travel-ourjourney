import 'bootstrap/dist/css/bootstrap.min.css'; // Pastikan Bootstrap CSS diimpor
import React from 'react';
import '../css/faq.css'; // Pastikan ini mengarah ke file CSS yang benar

const FAQ = () => {
    return (
        <div className="faq" style={{ backgroundImage: "url('/src/assets/img/bg1.png')" }}>
            <header className="header">
                <div className="logo">
                    <span>DESTINA<span>6</span></span>
                </div>
                <nav className="nav-bar">
                    <a href="/Homescreen">Home</a>
                    <a href="/faq">FAQ</a>
                    <a href="/contact">Contact</a>
                    <a href="/signin">Sign in</a>
                </nav>
            </header>
        </div>
    );
};

export default FAQ;
