import React, { useEffect, useState } from 'react';
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
  Register,
  StyledLink,
  Wrapper,
  StyledFinance,
  Container,
} from './RegistrationForm.styled';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/slices/sessionSlice';
import PasswordStrength from 'components/Inputs/PasswordStrength';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Incorrect e-mail address')
    .required('This field is required'),
  password: Yup.string()
    .min(6, 'The password must be at least 6 characters long')
    .max(12, 'The password cannot be longer than 12 characters')
    .required('This field is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must be the same')
    .required('This field is required'),
  firstName: Yup.string()
    .min(1, 'The name must be at least 1 character long')
    .max(12, 'The name cannot be longer than 12 characters')
    .required('This field is required'),
});

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
};

const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const isAuth = useSelector(state => state.session.isAuth);

  // useEffect(() => {
  //   if (isAuth) {
  //     navigate('/home');
  //   }
  // }, [isAuth, navigate]);

  const handleSubmit = values => {
    dispatch(
      register({
        name: values.firstName,
        email: values.email,
        password: values.password,
      })
    );
    navigate('/login');
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

  const [password, setPassword] = useState('');

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <FormikForm>
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
                  autoComplete="new-password"
                  onInput={e => {
                    setPassword(e.target.value);
                  }}
                />
                <PasswordStrength value={password} />

                <ErrorMsg name="password" component="div" />
              </FormGroup>

              <FormGroup>
                <StyledIcon width="17" height="21">
                  <use xlinkHref={`${icons}#password`} />
                </StyledIcon>
                <FormikField
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="confirm Password"
                  autoComplete="new-password"
                />
                <ErrorMsg name="confirmPassword" component="div" />
              </FormGroup>

              <FormGroup>
                <StyledIcon width="18" height="18">
                  <use xlinkHref={`${icons}#firstname`} />
                </StyledIcon>
                <FormikField
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="first name"
                />
                <ErrorMsg name="firstName" component="div" />
              </FormGroup>
              <Register type="submit">Register</Register>
              <StyledLink to="/login">Log In</StyledLink>
            </Wrapper>
          </Container>
        </FormikForm>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
