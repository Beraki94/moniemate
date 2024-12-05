import React from "react";
import "./AboutFounder.css";

const founders = [
  {
    name: "Chijioke Dozie",
    title: "Co-founder & CEO",
    description: "Chijioke Dozie was an investment analyst at the International Finance Corporation and an investment associate at Zephyr Management LP in the US and South Africa. He holds an MBS from Harvard Business School.",
    image: "https://image.cnbcfm.com/api/v1/image/106562388-1591133291285clark.jpg?v=1591133343&w=1600&h=900", // Replace with actual image path
    linkedin: "https://www.linkedin.com/in/chijioke-dozie/"
  },
  {
    name: "Ngozi Dozie",
    title: "Co-founder & Managing Director",
    description: "Ngozi Dozie was an investment banker at JPMorgan in New York, a business process risk consultant at Arthur Andersen UK and a financial analyst at Deloitte & Touche. He holds an MBA from Wharton School and is a CFA Charter holder.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrnWL7kFf1wdk4KLkVk1j25uZpui7A32k5xQ&s", // Replace with actual image path
    linkedin: "https://www.linkedin.com/in/ngozi-dozie/"
  }
];

const AboutFounder = () => {
  return (
    <div className="founders">
      
      <div className="founders__list">
        {founders.map((founder, index) => (
          <div key={index} className="founder">
            <div className={`founder__image-wrapper border-color-${index}`}>
              <img src={founder.image} alt={founder.name} className="founder__image" />
            </div>
            <div className="founder__info">
              <h3 className="founder__name">{founder.name}</h3>
              <p className="founder__title">{founder.title}</p>
              <p className="founder__description">{founder.description}</p>
              <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="founder__linkedin">
                <img src="/path/to/linkedin-icon.png" alt="LinkedIn" className="founder__linkedin-icon" /> {/* Replace with actual LinkedIn icon path */}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutFounder;
