import { faqData } from "../../data";
// Accordion.js
import React, { useState } from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";
import "./Accordion.css";


function Accordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion">
      {faqData.map((item, index) => (
        <div key={index} className="accordion__item">
          <div
            className="accordion__question"
            onClick={() => toggleAccordion(index)}
          >
            <h5 className="accordion__question-text">{item.question}</h5>
            {activeIndex === index ? (
              <HiOutlineChevronUp className="accordion__icon" />
            ) : (
              <HiOutlineChevronDown className="accordion__icon" />
            )}
          </div>
          <div className={`accordion__answer ${activeIndex === index ? "accordion__answer--active" : ""}`}>
            <p className="accordion__answer-text">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
