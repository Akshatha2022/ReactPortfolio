import React, { useState } from 'react';
import NavTabs from './Navtabs';
import About from '.';
import Resume from '.';
import Contact from './t';
import Portfolio from './';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    // TODO: Add a comment describing the functionality of this method
    //  checking to see if currentpage is one of the nav links and then render page if it is
    const renderPage = () => {
      if (currentPage === 'About') { //about me
        return < />;
      }
      if (currentPage === '') { // my portfolio
        return < />;
      }
      if (currentPage === 'Resume') { // my resume
        return </>;
      }
      return < />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
      <div>
        {}
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        {}
        {renderPage()}
      </div>
    );
  }
