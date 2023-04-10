import React  from 'react';
import {
  MDBContainer,
  MDBFooter,
  //MDBNavbar,
  //MDBNavbarBrand,
  //MDBNavbarToggler,
  MDBIcon,
  //MDBNavbarNav,
  //MDBNavbarItem,
  //MDBNavbarLink,
  MDBBtn,
  //MDBDropdown,
  //MDBDropdownToggle,
  //MDBDropdownMenu,
  //MDBDropdownItem,
  //MDBDropdownLink,
  //MDBCollapse
} from 'mdb-react-ui-kit';



export default function Footer() {
    return(
//   const [showBasic, setShowBasic] = useState(false);
//   const [isDarkMode, setIsDarkMode] = useState(false);


<MDBFooter className='bg-light text-center text-white'>
  <MDBContainer className='p-4 pb-0'>
    <section className='mb-4'>


      <MDBBtn
        floating
        className='m-1'
        style={{ backgroundColor: '#55acee' }}
        href='https://twitter.com/akshatha_bk'
        role='button'
        
      >
        
        <MDBIcon fab icon='twitter' />
      </MDBBtn>



      <MDBBtn
        floating
        className='m-1'
        style={{ backgroundColor: '#333333' }}
        href='https://github.com/Akshatha2022/ReactPortfolio'
        role='button'
      >
        <MDBIcon fab icon='github' />
      </MDBBtn>
    </section>
  </MDBContainer>

  <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    © 2023 Copyright:
    <a className='text-white' href='https://mdbootstrap.com/'>
      MDBootstrap.com
    </a>
  </div>
</MDBFooter>
);
}
