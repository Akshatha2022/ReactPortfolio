import React from 'react';

const styles = {
    footer: {
        display: 'flex',
      marginTop: 1000,
      background: 'light gray',
    },
    content: {
        display: 'flex',
      padding: 20,
      marginTop: '1000'
    },
  };

  function Footer() {
    return (
      <div style={styles.footer}>
         <div style={styles.content}>
            'creating a footer'
            </div>
      </div>
    );
  }

export default Footer;