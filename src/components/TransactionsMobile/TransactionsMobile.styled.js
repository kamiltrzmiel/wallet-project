import styled from 'styled-components';

export const MainList = styled.ul`
  min-width: 280px;
  max-height: 60vh;
  overflow-y: auto;
`;

export const SecondList = styled.ul`
  margin-bottom: 8px;
  border: 1px solid #fff;
  border-radius: 10px;
`;

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #dcdcdf;
  height: 47px;
  background-color: #fff;
  padding-left: 20px;
  padding-right: 20px;

  & span::first-letter {
    text-transform: uppercase;
  }
`;

export const SumSpan = styled.span`
  font-weight: 700;
`;

export const EditBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: color 350ms ease;

  &:hover,
  &:focus {
    color: var(--color-brand-primary);

    & img {
      background-color: var(--color-brand-primary);
      border-radius: 50%;
    }
  }

  & img {
    margin-right: 5px;
    margin-bottom: -1px;
    transition: background-color 350ms ease, border-radius 350ms ease;
  }
`;
