import React from "react";
import { FaLock } from "react-icons/fa";
import "./SecurityCard.css";

function SecurityCard() {
  return (
    <section className="security-card">
      <div className="security-card__icon">
        <div className="security-card__icon-bg">
          <FaLock className="security-card__lock-icon" />
        </div>
      </div>
      <h2 className="security-card__title">Risk and Fraud Protection</h2>
      <p className="security-card__description">
        When you trust us to handle your transactions, you deserve to know we’re
        protecting them from any threats. We combine advanced traditional, online,
        and third-party technologies to provide you with the highest level of security.
      </p>
    </section>
  );
}

export default SecurityCard;
