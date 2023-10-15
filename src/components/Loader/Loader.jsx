import React from 'react';
import { RotatingLines } from 'react-loader-spinner';

import { Loader } from './Loader.styled';

const Spinner = () => {
  return (
    <Loader>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Loader>
  );
};

export default Spinner;
