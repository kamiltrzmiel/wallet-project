import styled from 'styled-components';
import topBg from '../../assets/bg-images/currency/top-bg.svg';
import bottomBg from '../../assets/bg-images/currency/bottom-bg.svg';

export const StyledTable = styled.table`
  background-color: #4a56e2;
  border-radius: 30px;
  min-width: 280px;
  min-height: 232px;
  padding: 11px 20px 52px;
  text-align: left;
  color: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 40%;
    background-repeat: no-repeat;
  }

  &::before {
    top: 0;
    left: 0;
    background-image: url(${topBg});
  }

  &::after {
    bottom: 0;
    left: 0;
    background-image: url(${bottomBg});
  }

  @media (min-width: 768px) {
    min-width: 336px;
    padding-bottom: 56px;

    &::before {
      top: -5px;
      background-size: contain;
    }

    &::after {
      background-size: cover;
      height: 50%;
    }
  }

  @media (min-width: 1280px) {
    min-width: 393px;
    padding: 17px 60px 100px;

    &::before {
      top: -8px;
    }
    &::after {
      height: 35%;
    }
  }
`;

export const StyledTr = styled.tr`
  display: flex;
  justify-content: space-between;
`;

export const StyledTh = styled.th`
  padding-bottom: 12px;
  font-size: 18px;

  @media (min-width: 768px) {
    &:nth-child(2) {
      margin-left: -30px;
    }
  }

  @media (min-width: 1280px) {
    &:first-child {
      margin-left: -14px;
      margin-right: 8px;
    }
  }
`;

export const StyledTd = styled.td`
  padding-top: 12px;

  @media (min-width: 1280px) {
    padding-top: 24px;
  }
`;
