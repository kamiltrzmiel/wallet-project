import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';
import Finance from './Finance/Finance';

export const FormikForm = styled(Form)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15.5px;
  margin-bottom: 60px;

  span {
    font-weight: bold;
  }

  svg {
    width: 30px;
    height: 30px;
  }

  @media (min-width: 768px) {
    gap: 20px;
    margin-top: 40px;
    svg {
      width: 40px;
      height: 40px;
    }
    span {
      font-size: 30px;
    }
  }
`;

export const FormikField = styled(Field)`
  border: none;
  border-bottom: 1px #e0e0e0 solid;
  font-family: circe;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.33;
  width: 225.5px;
  padding: 3.54px 0px 3.54px 54.5px;
  background-color: #fff;
  &:focus {
    outline: none;
    background-color: transparent;
  }
  @media (min-width: 768px) {
    min-width: 355px;
  }
`;

export const FormGroup = styled.div`
  margin-bottom: 40px;
  position: relative;
  height: 32px;
  width: 280px;
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    min-width: 409.5px;
  }
`;

export const StyledIcon = styled.svg`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12.5px;
`;
export const ErrorMsg = styled(ErrorMessage)`
  color: red;
  margin-top: 5px;
`;

export const LogIn = styled.button`
  margin-top: 8px;
  background-color: #24cca7;
  outline: none;
  border: 1px #000 solid;
  border-radius: 20px;
  max-width: 280px;
  font-size: 18px;
  color: #fff;
  text-transform: uppercase;
  font-family: circle;
  padding: 13px 108.76px;
  border: none;
  @media (min-width: 768px) {
    max-width: 300px;
    padding: 14.5px 119.76px;
  }
`;

export const StyledLink = styled(NavLink)`
  background-color: #fff;
  outline: none;
  border: 1px #4a56e2 solid;
  border-radius: 20px;
  max-width: 280px;
  font-size: 18px;
  color: #4a56e2;
  text-transform: uppercase;
  font-family: circle;
  text-decoration: none;
  padding: 13px 96px;
  margin-top: 20px;
  @media (min-width: 768px) {
    max-width: 300px;
    padding: 13.7px 106px;
    margin-bottom: 56px;
  }
`;
export const Container = styled.div`
  z-index: 100;
  background-color: rgba(255, 255, 255, 0.4);
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const Wrapper = styled.div`
  z-index: 101;
  background-color: #fff;
  padding: 20px;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 533px;
  }
`;

export const StyledFinance = styled(Finance)``;
