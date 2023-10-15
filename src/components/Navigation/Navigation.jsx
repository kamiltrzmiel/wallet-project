import React from 'react';
import { Icon } from 'components/Icon/Icon';

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
          <StyledNavLink
            to={`/home`}
            className={({ isActive }) =>
              isActive ? 'activelink' : NavContainer
            }
          >
            <Icon icon="icon__baseline-home" />
            <NavItemText>Home</NavItemText>
          </StyledNavLink>
        </NavItem>

        <NavItem>
          <StyledNavLink
            to={`/diagram`}
            className={({ isActive }) =>
              isActive ? 'activelink' : NavContainer
            }
          >
            <Icon icon="icon__baseline-timeline" />
            <NavItemText>Statistics</NavItemText>
          </StyledNavLink>
        </NavItem>

        <NavItem>
          <StyledNavLink
            to={`/currency`}
            className={({ isActive }) =>
              isActive ? 'activelink' : NavContainer
            }
          >
            <Icon icon="icon__baseline-dolar" />
          </StyledNavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default Navigation;
