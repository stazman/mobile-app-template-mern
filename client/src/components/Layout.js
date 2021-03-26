import React from 'react';
import { Container } from 'react-bootstrap';
import PropTypes from 'prop-types';


export const Layout = ({children}) => {
  return (
    <Container style={{marginTop: '5%'}}>
      {children}
    </Container>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired
};