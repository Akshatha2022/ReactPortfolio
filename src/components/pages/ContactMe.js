import React from 'react';


const styles = {
    contact: {
    margin: 10,
      background: 'green',
    },
    heading: {
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

export default function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
      <p>
        Email: akshathabk26@gmail.com
        Github: https://github.com/Akshatha2022


      </p>
    </div>
  );
}

// function Contact() {
//     return (
//       <div style={styles.contact}>
//         <div style={styles.heading}>Contact</div>
//         <div style={styles.content}>
// 'You can contact me through my github or my email address'
//         </div>
//       </div>
//     );
//   }

