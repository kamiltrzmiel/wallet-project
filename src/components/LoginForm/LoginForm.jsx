import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import icons from '../../assets/icons/login/icons.svg';
import {
  FormikForm,
  FormikField,
  Logo,
  StyledIcon,
  FormGroup,
  ErrorMsg,
  LogIn,
  StyledLink,
  Wrapper,
} from './LoginForm.styled';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Incorrect e-mail address')
    .required('This field is required'),
  password: Yup.string()
    .min(6, 'The password must be at least 6 characters long')
    .max(12, 'The password cannot be longer than 12 characters')
    .required('This field is required'),
});

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { setSubmitting }) => {
    // logika obsługi logowania
    console.log('Dane logowania:', values);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormikForm autoComplete="off">
        <Wrapper>
          <Logo>
            <svg>
              <use xlinkHref={`${icons}#wallet`} />
            </svg>
            <span>Wallet</span>
          </Logo>
          <FormGroup>
            <StyledIcon width="21" height="16">
              <use xlinkHref={`${icons}#message`} />
            </StyledIcon>
            <FormikField
              type="email"
              id="email"
              name="email"
              placeholder="E-mail"
            />
            <ErrorMsg name="email" component="div" />
          </FormGroup>
          <FormGroup>
            <StyledIcon width="17" height="21">
              <use xlinkHref={`${icons}#password`} />
            </StyledIcon>
            <FormikField
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
            <ErrorMsg name="password" component="div" />
          </FormGroup>

          <LogIn type="submit">Log In</LogIn>
          <StyledLink to="/register">Register</StyledLink>
        </Wrapper>
      </FormikForm>
    </Formik>
  );
};

export default LoginForm;
