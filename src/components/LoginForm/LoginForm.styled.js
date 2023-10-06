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
