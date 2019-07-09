import React from 'react';
import Loader from './style';

const LoaderComponent = ({ size }) => (
  <svg version="1.1" viewBox="-8 -8 100 100" width={size} height={size}>
    <Loader cx="45" cy="45" r="42" />
  </svg>
);

export default LoaderComponent;
