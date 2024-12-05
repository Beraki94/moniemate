import "./DiscountBadge.css";
import MainLogo from "../../images/qpr.png"; // Replace with the path to your main logo
import AviosLogo from "../../images/transactions.png"; // Replace with the path to Avios logo
import PayPalLogo from "../../images/qpr.png"; // Replace with the path to PayPal logo

function DiscountBadge() {
  return (

    <div className="discount-card">
        <div className="discount-card__image-wrapper">
        <div className="discount-card__main-logo">
          <img src={MainLogo} alt="Main logo" />
        </div>
        <div className="discount-card__icon discount-card__icon--avios">
          <img src={AviosLogo} alt="Avios logo" />
        </div>
        <div className="discount-card__icon discount-card__icon--paypal">
          <img src={PayPalLogo} alt="PayPal logo" />
        </div>
      </div>
      <div className="discount-card__content">
        <h2 className="discount-card__title">ENJOY UNLIMITED GIVEAWAY</h2>
        <p className="discount-card__description">
          Activity on any of your accounts, we’ll notify you. Start enjoying a
          more convenient and seamless experience today.
        </p>
      </div>
    </div>
  );
}

export default DiscountBadge;
