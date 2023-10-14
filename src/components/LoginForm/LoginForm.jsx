import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import icons from '../../assets/icons/login/icons.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/slices/sessionSlice';

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
  StyledFinance,
  Container,
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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.session.isAuth);

  useEffect(() => {
    if (isAuth) {
      navigate('/home');
    }
  }, [isAuth, navigate]);

  const initialValues = {
    email: '',
    password: '',
  };

  const [showFinance, setShowFinance] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      if (window.innerWidth >= 768) {
        setShowFinance(true);
      } else {
        setShowFinance(false);
      }
    };

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);

    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  const handleSubmit = values => {
    dispatch(login({ email: values.email, password: values.password }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormikForm autoComplete="off">
        {showFinance && <StyledFinance />}
        <Container>
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
                autoComplete="username"
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
                autoComplete="current-password"
              />
              <ErrorMsg name="password" component="div" />
            </FormGroup>

            <LogIn type="submit">Log In</LogIn>
            <StyledLink to="/register">Register</StyledLink>
          </Wrapper>
        </Container>
      </FormikForm>
    </Formik>
  );
};

export default LoginForm;
