import React from 'react';
import { Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import NavbarStyles from './styles/NavbarStyles';
import { device } from './styles/device';

const MediaQueries = styled.div`

  @media ${device.mobileS} {
    a.navbar-brand.bottom {
      font-size: 2.4rem;
  }

  @media ${device.mobileM} {
    a.navbar-brand.bottom {
      font-size: 2.8rem;
  }

  @media ${device.tabletS} {
    a.navbar-brand.bottom {
      font-size: 3.2rem;
  }

  @media ${device.tabletL} {
    a.navbar-brand.bottom {
      font-size: 3.6rem;
  }

  @media ${device.laptop} {
    nav.nb-bg.navbar.navbar-expand-xl.navbar-light.fixed-bottom {
        visibility: hidden;
  }
`;

const BottomNavBar = () => {
  return (
    <>
      <MediaQueries>
        <NavbarStyles>
          <Navbar expand='xl' className='nb-bg' fixed='bottom'>
            <Navbar.Brand href='/' className='bottom'>F1</Navbar.Brand>
            <Navbar.Brand href='/' className='bottom'>F2</Navbar.Brand>
            <Navbar.Brand href='/' className='bottom'>F3</Navbar.Brand>
            <Navbar.Brand href='/'className='bottom'>F4</Navbar.Brand>
          </Navbar>
        </NavbarStyles>
      </MediaQueries>
    </>
  );
};

export default BottomNavBar;