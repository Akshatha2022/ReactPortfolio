import React from 'react';

const styles = {
    About: {
    margin: 10,
      background: 'red',
      borderRadius: 50,
      padding: 1
    },
    heading: {
        borderRadius: 10,
        margin: 50,
       background: '#3f51b5',
      minHeight: 60,
      lineHeight: 3.5,
      fontSize: '1.2rem',
      color: 'white',
      padding: '0 20px',
    },
    content: {
      padding: 10,
    },
  };

  function about() {
    return (
      <div style={styles.about}>
        <div style={styles.heading}>About Me</div>
        <div style={styles.content}>
     'My name is Akshatha, I live in Minnesota with my family.I love to travel.
    I am currently learning coding in University of Minnesota bootcamp. We are learning creating beautiful, usable, professional websites using best practice accessibility and the latest web standard guidelines resulting in semantic and seo friendly HTML and CSS. Given links to some of my websites to showcase my potential to fit for a given position.
    Below Websites linked is designed, built according to latest web standards.'
    </div>
      </div>
    );
  }

  export default about;
