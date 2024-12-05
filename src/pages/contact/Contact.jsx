// Contact.js
import React from "react";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import "./Contact.css";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import group from "../../images/contactus.jpg"

function Contact() {
  return (
    <div className="contact">
      <section className="about__hero">
      <div className='about__hero-content'>
      <div>
        <h1 className="about__title"> Contact Us</h1>
        <p className="about__description">
        We at moniemate believe that financial transactions should be secure,
        seamless, and empowering for everyone. In today’s fast-paced digital world,
        the need for safety in financial dealings has never been more critical. That’s
        why we’ve developed innovative solutions designed to protect our customers
        from fraud while making their transactions as easy as possible.
        </p>
        <button className="btn">Get Started</button>
      </div>
      </div>
      <div className="about__image">
        <img src={group} alt="Business owners using Moniemate" />
      </div>
      </section>
        
      
      <section className="contact__boxes">
      <SectionHeader 
          title="Lets Get in Touch" 
        />
        <div className="contacts-1">
        <div className="contact__box contact__box--address">
          <div className="contact__icon" ><HiOutlineLocationMarker /></div>
          <h5 className="contact__box-title">Address</h5>
          <p className="contact__box-text">
            28 Pade Odanye close, off Adeniyi Jones, Ikeja, Lagos, Nigeria 
            (No money in the office, everything is digital)
          </p>
        </div>
        
        {/* Email Box */}
        <div className="contact__box contact__box--email">
         <div className="contact__icon" ><HiOutlineMail /></div>
          <h5 className="contact__box-title">Email</h5>
          <p className="contact__box-text">
            Customer service: <a href="mailto:help@fairmoney.io" className="contact__link">help@moniemate.com</a>
          </p>
        </div>
        
        {/* Phone Box */}
        <div className="contact__box contact__box--phone">
          <div className="contact__icon"><HiOutlinePhone  /></div>
          <h5 className="contact__box-title">Phone</h5>
          <p className="contact__box-text">
            Moniemate: <span className="contact__number">07000 </span> / <span className="contact__number">0201 700 1276</span>
          </p>
          <p className="contact__box-text">
            GFM: <span className="contact__number">07000 033 333</span> / <span className="contact__number">0201 8889008</span>
          </p>
        </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
