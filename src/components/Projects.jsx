import React, { useEffect } from 'react';
import './Projects.css';
import design1 from '../assets/img/design1.jpeg';
import design2 from '../assets/img/design2.jpeg';
import design3 from '../assets/img/design3.jpeg';
import design4 from '../assets/img/design4.jpeg';
import GridHoverEffect from '../Utility func/GridHoverEffect';
const images = [design1, design2, design3, design4];

function Projects() {
  return (
    <section className='project-container' id='projects'>
      <h2>Projects</h2>
      <p>See the things we have built.</p>
      <div className='grid-container'>
        {images.map((img, index) => {
          return (
            <>
              <article className='grid-item' key={index}>
                <img src={img} alt={`Design ${index + 1}`} />
              </article>
            </>
          );
        })}
      </div>
      <GridHoverEffect></GridHoverEffect>
    </section>
  );
}

export default Projects;
