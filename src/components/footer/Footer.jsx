import React from 'react';
import Logo from "../../images/log2.png";;
import { Link } from 'react-router-dom';
import { FaFacebook, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { AiFillInstagram, AiOutlineTwitter, AiOutlineMail } from 'react-icons/ai';
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content container">
        {/* Logo Section */}
        <div className="footer-section logo-section">
          <img src={Logo} alt="Moniemate Logo" />
          <h4>Moniemate</h4>
          <p>Empowering Your Financial Journey</p>
          <div className="social-icons">
            <a href="https://web.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><AiFillInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section quick-links">
          <h5>Our Company</h5>
          <ul>
            <li><Link to="/">mate</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Help and Contact</Link></li>
            <li><Link to="/contact">FAQ</Link></li>
          </ul>
        </div>

        {/* Address Section */}
        <div className="footer-section address">
          <h5>Moniemate Office</h5>
          <div className="contact-detail">
            <FaMapMarkerAlt className="footer-icon" />
            <p>Gwagwalada, Abuja Nigeria</p>
          </div>
          <div className="contact-detail">
            <AiOutlineMail className="footer-icon" />
            <p>Email: info@mate.com</p>
          </div>
          <div className="contact-detail">
            <FaPhoneAlt className="footer-icon" />
            <p>Phone: +234 816 492 2655</p>
          </div>
        </div>

        {/* Hours Section */}
        <div className="footer-section hours">
          <h5>Legals</h5>
          <p>Privacy</p>
          <p>Complaints</p>
          <p>Terms and condition</p>
          <p>License</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Moniemate. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
