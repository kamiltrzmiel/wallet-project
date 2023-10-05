import styled from 'styled-components';

export const AsideContainer = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 14px 20px 0;

  @media (max-width: ${props => props.theme.breakpoints.desktopForMaxMedia}) {
    flex-direction: row;
    justify-content: center;
    gap: 32px;
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 32px;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    border-right: 2px solid #e7e5f2;
    box-shadow: 1px 0 0 0 rgba(255, 255, 255, 0.6);
    padding: 40px 69px 20px 16px;
    gap: 32px;
  }
`;

export const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 28px;

  @media (max-width: ${props => props.theme.breakpoints.tabletForMaxMedia}) {
    align-items: center;
    margin-top: 15px;
    gap: 12px;
  }

  @media (min-width: ${props => props.theme.breakpoints.desktop}) {
    height: auto;
  }
`;
