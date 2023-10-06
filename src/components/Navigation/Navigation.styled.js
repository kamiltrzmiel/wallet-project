import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  margin: 0;
  padding: 0;
  min-width: 280px;
  display: flex;
  justify-content: center;
  @media (min-width: 768px) {
    display: inline-block;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 30px;

  @media (min-width: 768px) {
    flex-direction: column;
    gap: 15px;
    & > :last-of-type {
      display: none;
    }
  }
`;

export const NavItem = styled.li`
  margin: 0;
  padding: 0;
`;

export const StyledNavLink = styled(NavLink)`
  margin: 0;
  padding: 0;
  text-decoration: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 20px;
  outline: none;
  &:focus,
  &:hover {
  }
  &:focus {
    span {
      transition: color 150ms;
    }
  }
  @media (min-width: 768px) {
    gap: 20px;
  }
`;

export const NavItemText = styled.span`
  display: none;
  @media (min-width: 768px) {
    display: inline;
    color: #000;
    transition: color 150ms;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    &:hover {
      color: #4e58dd;
      transition: color 150ms;
    }
  }
`;
