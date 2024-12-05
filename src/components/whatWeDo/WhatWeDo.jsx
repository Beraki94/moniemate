import './WhatWeDo.css';
import { FaRegCheckCircle } from "react-icons/fa";

function WhatWeDo() {
  const features = [
    {
      title: "Manage Your Transactions Seamlessly",
      description: `Keep track of all your transactions and payments with real-time notifications. 
        Whether it’s sending or receiving money, MonieMate ensures you’re always informed.`,
      points: ["Pay any bill", "Instant Notification", "User-friendly interface"],
      imageClass: "left",
    },
    {
      title: "Stay on Top of Your Finances",
      description: `Monitor all your transactions and payments with real-time updates and notifications. 
        Stay informed and in control with MonieMate.`,
      points: ["Track all payments", "Instant Notification", "Easy management"],
      imageClass: "right",
    },
  ];

  return (
    <div className="whatwedo container">
      {features.map((feature, index) => (
        <div className="whatwedo__feature" key={index}>
          <div className={`whatwedo__image ${feature.imageClass}`} />
          <div className="whatwedo__content">
            <h4 className="whatwedo__title">{feature.title}</h4>
            <p className="whatwedo__description">{feature.description}</p>
            <ul className="whatwedo__list">
              {feature.points.map((point, i) => (
                <li key={i}><FaRegCheckCircle /> {point}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WhatWeDo;
