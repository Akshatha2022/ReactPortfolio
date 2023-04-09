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
      
export default NavTabs;