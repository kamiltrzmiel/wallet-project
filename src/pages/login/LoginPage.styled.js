import styled from 'styled-components';

import elipse1 from '../../assets/icons/login/Ellipse1.svg';
import elipse2 from '../../assets/icons/login/Ellipse2.svg';

export const BgStyle = styled.div`
  @media screen and (min-width: 768px) {
    background-color: #e5e5e5;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 368px;
      height: 383px;
      background: url(${elipse2}) no-repeat;
      background-size: cover;
      z-index: 1;
    }
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 496px;
      height: 323px;
      background: url(${elipse1}) no-repeat;
      background-size: cover;
      z-index: 1;
    }
  }
`;
