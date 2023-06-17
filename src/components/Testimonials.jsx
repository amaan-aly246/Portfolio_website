import React from 'react';
import './Testimonials.css';

function Testimonials({ title, text, handleLeft, handleRight, src }) {
  return (
    <>
      <section className='testimonials' id='testimonials'>
        <h2>testimonials</h2>
        <div className='testimonials-container'>
          <div className='testimonial'>
            <div className='circle'></div>
            <img src={src} alt='profile-1' />
            <span className='title'>{title} </span>
          </div>
          <div className='testimonial'>
            <div className='text'>{text}</div>
            <button className='btn btnLeft' onClick={handleRight}>
              {'>'}
            </button>
            <button className='btn btnRight' onClick={handleLeft}>
              {'<'}
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
