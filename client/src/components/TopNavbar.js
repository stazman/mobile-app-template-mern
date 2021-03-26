import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import { NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import NavbarStyles from './styles/NavbarStyles';
import { device } from './styles/device';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';
import Logo from './layouts/Logo';

const MediaQueries = styled.div`

a.dropdown-item {
  font-size: .8rem;
}

@media ${device.mobileS} {
    a.top.navbar-brand {
      font-size: 3.4rem;
    }
    a.dropdown-toggle.nav-link::after {
      font-size: 4.5rem;
    }
    div.mr-auto.navbar-nav {
      position: fixed;
      top: 5em;
      right: 5em;
    }
    a.dropdown-item {
      font-size: 1.2rem;
    }
  }

  @media ${device.mobileM} {
    a.navbar-brand.top {
      font-size: 3.6rem;
    }
    a.dropdown-toggle.nav-link::after {
      font-size: 4.75rem;
    }
    div.mr-auto.navbar-nav {
      position: fixed;
      top: 5rem;
      right: 3rem;
    }
    a.dropdown-item {
      font-size: 1.4rem;
    }
  }

  @media ${device.tabletS} {
    a.navbar-brand.top {
      font-size: 4rem;
      padding-left: 2rem;
    }
    div.mr-auto.navbar-nav {
      position: fixed;
      top: 6.5rem;
      right: 5rem;
    }
  }

  @media ${device.tabletL} {
    a.navbar-brand.top {
      font-size: 4.6rem;
      padding-left: 3rem;
    }
    a.dropdown-toggle.nav-link::after {
      font-size: 5.5rem;
    }
    a.dropdown-item {
      font-size: 2rem;
    }
    div.mr-auto.navbar-nav {
      position: fixed;
      top: 7rem;
      right: 5rem;
    }
  }

  @media ${device.laptop} {
    a.top.navbar-brand {
      padding-left: 3rem;
      padding-right: 0;
    }
    nav a.top-link.nav-link {
      display: inline;
      padding-left: 1.4rem;
      padding-right: 6.5rem;
      font-size: 3.2rem;
    }
    a.dropdown-toggle.nav-link::after {
      font-size: 4rem;
      top: 3rem;
      right: 2rem;
    }
    div.mr-auto.navbar-nav {
      position: fixed;
      top: 8rem;
      right: 6rem;
    }
  }

  @media ${device.custLaptopPos1} {
    div.mr-auto.navbar-nav {
      position: fixed;
      top: 6rem;
      right: 32rem;
    }
    nav a.top-link.nav-link {
      font-size: 3.5rem;
      padding-left: 7rem;
      padding-right: 4rem;
    }
    a.dropdown-toggle.nav-link::after {
      font-size: 5.2rem;
      top: 3.2rem;
      right: 4rem;
    }
    div.mr-auto.navbar-nav {
      position: fixed;
      top: 8rem;
      right: 32rem;
    }
  }

  @media ${device.custLaptopPos2} {
    a.navbar-brand.top {
      font-size: 4.5rem;
    }
    nav a.top-link.nav-link {
      font-size: 4rem;
      padding-left: 6rem;
      padding-right: 7rem;
    }
    div.mr-auto.navbar-nav {
      position: fixed;
      top: 8rem;
      right: 32rem;
    }
  }

  @media ${device.laptopL} {
    a.top.navbar-brand {
      font-size: 5rem;
      padding-left: 3.5rem;
    }
    nav a.top-link.nav-link {
      font-size: 4.2rem;
      padding-left: 8rem;
      padding-right: 6rem;
    }
    a.dropdown-toggle.nav-link::after {
      font-size: 3rem;
      top: 4rem;
      right: 4rem;
    }
  }

  @media ${device.custLaptopPos3} {
    a.navbar-brand.top {
      font-size: 5rem;
      padding-left: 6rem;
    }
    nav a.top-link.nav-link {
      font-size: 4.8rem;
      padding-left: 8rem;
      padding-right: 8rem;
    }
    div.sc-ifAKCX.iYsIqr {
      margin-right: 0;
    }
    a.dropdown-toggle.nav-link::after {
      font-size: 6rem;
      top: 4rem;
      right: 4rem;
    }
    div.mr-auto.navbar-nav {
      position: fixed;
      top: 8.5rem;
      right: 36rem;
    }
    a.dropdown-item {
      font-size: 3rem;
    }
  }

  @media ${device.desktop} {
    a.navbar-brand.top {
      font-size: 5rem;
      padding-left: 7rem;
    }
    nav a.top-link.nav-link {
      font-size: 4.5rem;
      padding-left: 22rem;
      padding-right: 16rem;
    }
    a.dropdown-toggle.nav-link::after {
      font-size: 6.5rem;
      top: 3.8rem;
      right: 5rem;
    }
    div.mr-auto.navbar-nav {
      position: fixed;
      top: 9rem;
      right: 40rem;
    }
    a.dropdown-item {
      font-size: 3.2rem;
    }
  }
`;

const TopNavbar = ({ auth: { isAuthenticated, loading }, logout}) => {

  const authLinks = (
    <>
      <NavDropdown.Item onClick={logout} href='#!'>Log out</NavDropdown.Item>
      <NavDropdown.Item className="divider">-------------------</NavDropdown.Item>
      <NavDropdown.Item href='/dashboard'>Dashboard</NavDropdown.Item>
      <NavDropdown.Item href='/'>Settings</NavDropdown.Item>
      <NavDropdown.Item className="divider">-------------------</NavDropdown.Item>
      <NavDropdown.Item href='/'>About</NavDropdown.Item>
      <NavDropdown.Item href='/'>Contact</NavDropdown.Item>
      <NavDropdown.Item className="divider">-------------------</NavDropdown.Item>
    </>
  );

  const guestLinks = (
    <>
      <NavDropdown.Item href='/login'>Login</NavDropdown.Item>
      <NavDropdown.Item className="divider">-------------------</NavDropdown.Item>
      <NavDropdown.Item href='/register'>Register</NavDropdown.Item>
      <NavDropdown.Item className="divider">-------------------</NavDropdown.Item>
      <NavDropdown.Item href='/'>About</NavDropdown.Item>
      <NavDropdown.Item href='/'>Contact</NavDropdown.Item>
      <NavDropdown.Item className="divider">-------------------</NavDropdown.Item>
    </>
  );

  return (
    <>
      <MediaQueries>
        <NavbarStyles>
          <Navbar expand='xl' className='nb-bg' fixed='top'>
            <Navbar.Brand href='/' className='top'><Logo /></Navbar.Brand>
            <Nav.Link className='top-link'href="/">Feature 1</Nav.Link>
            <Nav.Link className='top-link'href="/">Feature 2</Nav.Link>
            <Nav.Link className='top-link'href="/">Feature 3</Nav.Link>
            <Nav.Link className='top-link'href="/">Feature 4</Nav.Link>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            {/* <Navbar.Collapse id='basic-navbar-nav'> */}
            <Nav className='mr-auto'>
              <NavDropdown id='basic-nav-dropdown'>
                { !loading && (<>{ isAuthenticated ? authLinks : guestLinks}</>) }
                <NavDropdown.Item href='/'>Feature 1</NavDropdown.Item>
                <NavDropdown.Item href='/'>Feature 2</NavDropdown.Item>
                <NavDropdown.Item href='/'>Feature 3</NavDropdown.Item>
                <NavDropdown.Item href='/'>Feature 4</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* </Navbar.Collapse> */}
          </Navbar>
        </NavbarStyles>
      </MediaQueries>
    </>
  );
};

TopNavbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStatetoProps = state => ({
  auth: state.auth
});

export default connect( mapStatetoProps, {logout} )(TopNavbar);