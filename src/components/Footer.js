// import React from 'react';

// import {
//     MDBFooter,
//     MDBContainer,
//     MDBIcon,
//     MDBBtn
//   } from 'mdb-react-ui-kit';

// const styles = {
//     footer: {
//         display: 'flex',
//       marginTop: 1000,
//       background: 'light gray',
//       height: 100,
//       textAlign: 'center',
//       marginBottom: '4rem'
//     },
//   };

//   function Footer() {
//     return (
//       <div style={styles.footer}>
         
//          <footer className="footer">
// 			<div>
// 				<a
// 					href="https://github.com/Akshatha2022/ReactPortfolio"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					<img
// 						src={require("../assets/github-logo.webp")}
// 						alt="Github"
// 						className="logo"
// 					></img>
// 				</a>
// 			</div>
//             <div>
// 				<a
// 					href="https://twitter.com/akshatha_bk"
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					<img
// 						src={require("../assets/twitter logo.jpg")}
// 						alt="Twitter"
// 						className="logo"
// 					></img>
// 				</a>
// 			</div>

//             <div>
// 				<a
// 					href=""
// 					target="_blank"
// 					rel="noopener noreferrer"
// 				>
// 					<img
// 						src={require("../assets/Linkedin logo.png")}
// 						alt="Linkedin"
// 						className="logo"
// 					></img>
// 				</a>
// 			</div>



//             </footer>
//             </div>
           
    
//     );
//   }
  

// export default Footer;


import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse
} from 'mdb-react-ui-kit';

export default function Footer() {
  const [showBasic, setShowBasic] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
        <MDBContainer>
      <MDBNavbar expand='lg' dark={isDarkMode} light={!isDarkMode} bgColor={isDarkMode ? 'dark' : 'light'}>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href='#'>Link</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag='a' className='nav-link'>
                    Dropdown
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <MDBDropdownLink>Action</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownLink>Another action</MDBDropdownLink>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBDropdownLink>Something else here</MDBDropdownLink>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink disabled href='#' tabIndex={-1} aria-disabled='true'>
                  Disabled
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>

            <form className='d-flex input-group w-auto'>
              <input type='search' className='form-control' placeholder='Type query' aria-label='Search' />
              <MDBBtn color='primary'>Search</MDBBtn>
            </form>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>

      <MDBBtn className='mt-5 me-4' onClick={() => setIsDarkMode(false)}>Light mode</MDBBtn>
      <MDBBtn className='mt-5' onClick={() => setIsDarkMode(true)}>Dark mode</MDBBtn>
    </MDBContainer>
  );
}