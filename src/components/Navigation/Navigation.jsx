import React from 'react';
import {
  NavContainer,
  NavItem,
  NavItemText,
  NavList,
  StyledNavLink,
} from './Navigation.styled';

const Navigation = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <StyledNavLink to={`/home`}>
            <NavItemText>Home</NavItemText>
          </StyledNavLink>
        </NavItem>

        <NavItem>
          <StyledNavLink to={`/diagram`}>
            <NavItemText>Statistics</NavItemText>
          </StyledNavLink>
        </NavItem>

        <NavItem>
          <StyledNavLink to={`/currency`} />
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navigation;
