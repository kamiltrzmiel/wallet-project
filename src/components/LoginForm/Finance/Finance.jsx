import React from 'react';
import icons from '../../../assets/icons/login/icons.svg';
import { Wrapper } from './Finance.styled';

const Finance = () => {
  return (
    <Wrapper id="wraper finance">
      <svg>
        <use xlinkHref={`${icons}#frame`} />
      </svg>
      <span>Finance App</span>
    </Wrapper>
  );
};

export default Finance;
