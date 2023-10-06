import styled from 'styled-components';

export const StyledTextarea = styled.textarea`
  resize: none;
  transition: all 0.3s ease-in-out;
  border: none;
  border-bottom: 1px solid var(--color-switch-main);
  font-family: Circe;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.33;
  color: var(--font-color-dark);
  max-width: 100%;
  margin-bottom: 10px;
  width: 280px;
  line-height: 1.33;
  padding-left: 8px;

  &::placeholder {
    color: var(--color-logout-button);
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 768px) {
    min-height: 27px;
    height: 27px;
    overflow: hidden;
    width: 409.5px;
  }

  @media (max-width: 767px) {
    height: auto;
    `;
