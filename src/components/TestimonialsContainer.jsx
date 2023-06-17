import React, { useState, useEffect } from 'react';
import Testimonials from './Testimonials';
import arrTestimonials from './data';

function TestimonialsContainer() {
  const [Index, setIndex] = useState(0);
  const [name, setName] = useState(arrTestimonials[Index]);

  // function to iterate  over the testimonial array
  const handleRight = () => {
    var newIndex = Index + 1;
    if (newIndex >= arrTestimonials.length) {
      newIndex = 0;
    }
    setIndex(newIndex);
    setName(arrTestimonials[newIndex]);
    console.log(Index);
  };
  const handleLeft = () => {
    var newIndex = Index - 1;
    if (newIndex < 0) {
      newIndex = arrTestimonials.length - 1;
    }
    setIndex(newIndex);
    setName(arrTestimonials[newIndex]);
    console.log(Index);
  };

  return (
    <>
      <Testimonials
        title={name.title}
        text={name.text}
        handleRight={handleRight}
        handleLeft={handleLeft}
        src={name.src}
      ></Testimonials>
    </>
  );
}

export default TestimonialsContainer;
