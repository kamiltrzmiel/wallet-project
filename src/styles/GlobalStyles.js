import { createGlobalStyle } from 'styled-components';
import { Icon } from 'components/Icon/Icon';
import TopRightIcon from '../assets/icons/login/Ellipse1.svg';
import BottomLeftIcon from '../assets/icons/login/Ellipse2.svg';
import BottomLeftBigIcon from '../assets/icons/login/Ellipse2.svg';
import TopRightBigIcon from '../assets/icons/login/Ellipse1.svg';
export const GlobalStyles = createGlobalStyle`

  ul {
    margin: 0;
    padding: 0;
  }

  h4 {
    margin: 0;
  }
  
  nav {
    .active{
        ${Icon} {
          fill: var(--nav-color-active);
          transition: fill 150ms, box-shadow 150ms;
          box-shadow: 0px 3px 10px rgba(74, 86, 226, 0.5);
        }
        span {
          color: var(--font-color-dark);
          font-size: 18px;
          font-weight: 700;
          font-style: normal;
          &:hover {
            color: var(--nav-color-active);
          }
        }
      }
    }
  .Toastify__toast {
    border-radius: 12px;
    background-color: var(--background-light);
    font-family: Circe;
  }
  body {
  z-index: -1;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // background: var(--background-accent);
  /* background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(25px); */

  /* @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    position: fixed;
    width: 100vw;
    height: 100vh;
    &::before {
      content: url(${TopRightIcon});
      position: absolute;
      z-index: -1;
      top: 0px;
      right: 0px;
    }
    &::after {
      content: url(${BottomLeftIcon});
      position: absolute;
      z-index: -1;
      bottom: -5px;
      left: 0px;
    }
    @media (min-height: 820px) and (min-width: ${({ theme }) =>
      theme.breakpoints.desktop}) {
      &::after {
      content: url(${BottomLeftBigIcon});
      position: absolute;
      z-index: -1;
      bottom: -5px;
      left: 0px;
    }
    &::before {
      content: url(${TopRightBigIcon});
      position: absolute;
      z-index: -1;
      top: 0px;
      right: 0px;
    }
  }
  } */

}

`;
