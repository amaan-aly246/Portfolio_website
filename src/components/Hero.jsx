import React from 'react';
import './Hero.css';
import profile from '../assets/img/profile_img.jpeg';
import TypingEffect from '../Utility func/TypingEffect';
import {  useState, useEffect } from 'react';
function Hero() {
  const [shouldShowText, setShouldShowText] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setShouldShowText(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <section className='hero-container' id='hero'>
        <article className='info'>
          <span>Hey y'all</span>

          <span >
            {shouldShowText ? `I'm amaan aly` : <TypingEffect />}
          </span>
          <span>
            I help
            <span> startups design memorable experience </span> for their
            products and build their brand identity with clarity , meaning and
            identity...
          </span>
        </article>
        <article className='image-container'>
          <img src={profile} alt='' />
          <div className='social-container'></div>
        </article>
      </section>
    </>
  );
}

export default Hero;
