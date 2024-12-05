import "./Hero.css";
import AppStoreIcon from "../../images/applestore.png"; // Path to your App Store icon image
import PlayStoreIcon from "../../images/playstore.png" // Path to your Google Play icon image
import PhoneMockup from "../PhoneMockup";


function Hero() {
  return (
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Your Ultimate Money Companion</h1>
        <p className="hero__subtitle">Experience seamless money transfers, 
          bill payments, and more with MonieMate. Simplifying transactions for Nigerians like never before.
        </p>
        <div className="hero__buttons">
          <a href="#" className="hero__button">
            <img src={AppStoreIcon} alt="Download on the App Store" />
          </a>
          <a href="#" className="hero__button">
            <img src={PlayStoreIcon} alt="Get it on Google Play" />
          </a>
        </div>
        <p className="hero__disclaimer">
          Fully Licensed by the CBN &nbsp; | &nbsp; Deposits Insured by{" "}
          <strong>NDIC</strong>
        </p>
      </div>
      <div className="hero__image">
       <div className="hero__image__circle">
        <PhoneMockup />
       </div>
      </div>
    </div>
  );
}

export default Hero;
