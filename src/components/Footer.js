import React from 'react';

const styles = {
    footer: {
        display: 'flex',
      marginTop: 1000,
      background: 'light gray',
      height: 100,
      textAlign: 'center',
      marginBottom: '4rem'
    },
  };

  function Footer() {
    return (
      <div style={styles.footer}>
         
         <footer className="footer">
			<div>
				<a
					href="https://github.com/Akshatha2022/ReactPortfolio"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../assets/github-logo.webp")}
						alt="Github"
						className="logo"
					></img>
				</a>
			</div>
            <div>
				<a
					href="https://twitter.com/akshatha_bk"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../assets/twitter logo.jpg")}
						alt="Twitter"
						className="logo"
					></img>
				</a>
			</div>

            <div>
				<a
					href=""
					target="_blank"
					rel="noopener noreferrer"
				>
					<img
						src={require("../assets/Linkedin logo.png")}
						alt="Linkedin"
						className="logo"
					></img>
				</a>
			</div>



            </footer>
            </div>
           
    
    );
  }
  

export default Footer;