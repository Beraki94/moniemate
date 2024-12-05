import './GetStartedCard.css';

function GetStartedCard({ step, title, description, image }) {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__step">{step}</div>
        <h6 className="card__title">{title}</h6>
        <p className="card__description">{description}</p>
      </div>
      {image && <img src={image} alt={title} className="card__image" />}
    </div>
  );
}

export default GetStartedCard;
