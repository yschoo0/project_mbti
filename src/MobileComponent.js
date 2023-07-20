import React from 'react';
import { useMediaQuery } from 'react-responsive';

const MobileComponent = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <div>
      {isMobile ? (
        <h1>Mobile View</h1>
      ) : (
        <h1>Desktop View</h1>
      )}
    </div>
  );
};

export default MobileComponent;
