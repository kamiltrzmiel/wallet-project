import styled from 'styled-components';

export const StyledButton = styled.button`
  position: sticky;

  align-self: flex-end;
  z-index: 99;
  right: 20px;
  bottom: 20px;
  background: transparent;
  cursor: pointer;
  transition: transform 0.5s;
  width: 44px;
  height: 44px;
  border-radius: 100%;
  border-style: none;
  box-shadow: 0px 3px 10px rgba(36, 204, 167, 0.8);
  overflow: hidden;

  &:hover {
    transform: scale(1.2);
  }

  & svg {
    width: 79px;
    height: 79px;
    position: absolute;
    top: 67%;
    left: 22px;
    transform: translate(-50%, -50%);
    fill: #24cca8;
  }

  @media (min-width: 768px) {
    position: absolute;
  }
  @media (min-width: 1280px) {
    position: absolute;
    bottom: -40px;
  }
`;
