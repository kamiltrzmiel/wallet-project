import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormikForm = styled(Form)`
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;

export const FormGroup = styled.div`
  margin-bottom: 40px;
  position: relative;
  height: 32px;
  display: flex;
  flex-direction: column;
`;

export const StyledIcon = styled.svg`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 12.5px;
`;
export const Error = styled(ErrorMessage)`
  color: red;
  margin-top: 5px;
`;

export const LogIn = styled.button`
  background-color: #24cca7;
  outline: none;
  border: 1px #000 solid;
  border-radius: 20px;
  min-width: 280px;
  font-size: 18px;
  color: #fff;
  text-transform: uppercase;
  font-family: circle;
  padding: 13px 98px;
`;
