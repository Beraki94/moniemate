// PhoneMockup.js
import React from 'react';
import './PhoneMockup.css';
import transactionsImage from "../images/iphonem.png"
const PhoneMockup = () => {
  return (
    <div className="phone-mockup">
      <div className="ripple-ring"></div>
      <img src={transactionsImage} alt="Transaction Screenshot" className="phone-image" />
    </div>
  );
};

export default PhoneMockup;
