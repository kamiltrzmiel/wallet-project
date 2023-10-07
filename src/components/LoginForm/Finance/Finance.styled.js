import styled from 'styled-components';

export const Wrapper = styled.div`
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 40px;
  margin-bottom: 50px;
  margin-top: 60px;
  span {
    font-size: 30px;
    text-transform: capitalize;
  }

  svg {
    width: 261px;
    height: 250px;
  }
  @media (min-width: 1280px) {
    flex-direction: column;
    margin-left: 76px;
    margin-right: 37.8px;
    svg {
      width: 435.2px;
      height: 419.5px;
    }
  }
`;
