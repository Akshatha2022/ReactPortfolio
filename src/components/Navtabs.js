import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
//   currentPage and handlePageChange are passed in as props 
// deconstructing the props object  
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //  TODO: Add a comment explaining what this logic is doing
            // ternary operator is checking logic is home nav link is active 
          className={currentPage === 'About Me' ? 'nav-link active' : 'nav-link'}
        >
          About Akshatha
        </a>
      </li>
      
      <li className="nav-item">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          //  TODO: Add a comment explaining what this logic is doing
            // ternary operator is checking logic is home nav link is active 
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          //  TODO: Add a comment explaining what this logic is doing
                // ternary operator is checking if the currentPage is equal to blog 
                // if its is the it will return to blog 
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          My Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          //  TODO: Add a comment explaining what this logic is doing
           // if current page is contact then return the page contact  
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact Me
          
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;