/* eslint-disable react/display-name */
import React from 'react';
import spinner from './loading.gif';

export default () => (
  <>
    <img
      src={spinner}
      style={{ width: '200px', margin: 'auto', display: 'block' }}
      alt='Loading ...'
    />
  </>
);