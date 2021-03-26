import styled from 'styled-components';

const NavbarStyles = styled.div`
  .nb-bg {
    background-color: navy;
  }

  .navbar-light .navbar-brand,
  .navbar-light .navbar-nav .nav-link {
    color: white;
  }

  button.navbar-toggler {
    display: none;
  }

  a.navbar-brand.top {
    font-size: 3rem;
    padding-left: 1rem;
  }

  a.navbar-brand.bottom {
    font-size: 2rem;
    margin-right: 0;
    padding: .2rem;
  }

  nav a.top-link.nav-link {
    font-size: 2.5rem;
    color: white;
    display: none;
    padding-left: 0;
    padding-right: 7.5rem;
  }

  a.dropdown-toggle.nav-link::after {
    position: fixed;
    right: .5em;
    top: .6em;
    padding: 0;
    font-size: 4rem;
  }
  
  div.mr-auto.navbar-nav {
    position: fixed;
    top: 4.5rem;
    right: 1.5rem;
  }

  a.dropdown-item {
    font-size: 3rem;
  }
`;
export default NavbarStyles;