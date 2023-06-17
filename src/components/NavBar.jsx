import React from 'react';
import '../components/NavBar.css';
import { HashLink } from 'react-router-hash-link';
function NavBar() {
  const navItems = ['projects', ' testimonials', 'FAQS' , 'Contact'];

  return (
    <div className='nav-container'>
      <nav>
        <ul>
          <HashLink smooth className='hashlink' to='#hero'>
            <li>home</li>
          </HashLink>
        </ul>
        <ul className='nav__right'>
          {navItems.map((item, index) => {
            return (
              <>
                {/* If you see the testimonial string, there is a white space before the string which results in '# testimonial ' in the URL, making the HashLink not work properly. Now, using trim(), we eliminate all whitespaces */}
                <HashLink
                  to={`#${item.trim()}`}
                  key={index}
                  smooth
                  className='hashlink'
                >
                  <li>
                    {index == navItems.length - 1 ? <span>{item}</span> : item}
                    {/*  this conditional statement will allow us to add certain style to only last element of the array. making the code more flexible */}
                  </li>
                </HashLink>
              </>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
