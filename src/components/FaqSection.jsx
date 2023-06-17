import React  , { useState } from 'react';
import './FaqSection.css';
import Data from './QuestionData';
function FaqSection() {
  const [openIndex, setOpenIndex] = useState(false);

  const handleClick = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className='faq-section' id='FAQS'>
      <h2>FAQs</h2>
      {Data.map(({ ques, answer }, index) => {
        const isOpen = openIndex === index;

        return (
          <div className='faq-container' key={index}>
            <div className='faq-question'> {ques}</div>
            <span className='btn' onClick={() => handleClick(index)}>
              {isOpen ? (
                <i className='fa-solid fa-minus'></i>
              ) : (
                <i className='fa-light fa-plus'></i>
              )}
            </span>
            {isOpen && <p className='faq-answer'>{answer}</p>}
          </div>
        );
      })}
    </section>
  );
}
export default FaqSection;
