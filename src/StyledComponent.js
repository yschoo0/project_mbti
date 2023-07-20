import React from 'react';
import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 24px;
  color : black;

  @media (max-width: 767px) {
    font-size: 16px;
  }
`;

const ResponsiveHeading = () => {
  return (
    <div>
      <Heading>Responsive Heading</Heading>
    </div>
  );
};

export default ResponsiveHeading;
