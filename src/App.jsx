import './App.css';
import FaqSection from './components/FaqSection';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import TestimonialsContainer from './components/TestimonialsContainer';
import Projects from './components/Projects';
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from 'react';
import Contact from './components/Contact';
function App() {
  useEffect(() => {
    //  React preserves the value of re-render , when we click on project link , url= #project, jump to project section and even if we reload it stays there(value is preserved) hence we have to manually change the url.
    //  window.location.hash = '';
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
    window.location.hash = '';
  }, []);
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <Hero></Hero>
        <Projects></Projects>
        <TestimonialsContainer></TestimonialsContainer>
        <FaqSection></FaqSection>
        <Contact></Contact>
      </BrowserRouter>
    </>
  );
}

export default App;
