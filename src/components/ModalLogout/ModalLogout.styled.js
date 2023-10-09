import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  transition: opacity 0.3s ease;
`;
export const ModalWindow = styled.div`
  padding: 18px;
  padding-bottom: 90px;
  border-radius: 20px;
  background-color: #fff;
  position: relative;
  max-width: 280px;
  animation: slideIn 0.3s ease;
  text-align: center;

  @media (min-width: 1280px) {
    min-width: 330px;
  }

  @keyframes slideIn {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const NoBtn = styled.button`
  border-radius: 20px;
  border: 1px solid #24cca7;
  background: #24cca7;
  padding-top: 13px;
  padding-bottom: 13px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  text-align: center;
  border: none;
  color: #fff;
  width: 80px;
  position: absolute;
  right: 18%;
  margin-top: 5px;
  cursor: pointer;
  transition: background-color 350ms ease;

  &:hover {
    background-color: var(--color-brand-primary);
  }

  @media (min-width: 1280px) {
    right: 20%;
  }
`;

export const YesBtn = styled.button`
  border-radius: 20px;
  border: 1px solid #4a56e2;
  background: #fff;
  padding-top: 13px;
  padding-bottom: 13px;
  letter-spacing: 1.8px;
  text-transform: uppercase;
  text-align: center;
  color: #4a56e2;
  width: 80px;
  position: absolute;
  left: 18%;
  margin-top: 5px;
  cursor: pointer;
  transition: background-color 350ms ease, color 350ms ease;

  &:hover {
    background-color: #4a56e2;
    color: #fff;
  }

  @media (min-width: 1280px) {
    left: 20%;
  }
`;
