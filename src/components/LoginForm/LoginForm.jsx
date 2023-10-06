import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import wallet from '../../assets/icons/wallet/wallet.png';
import icons from '../../assets/icons/login/icons.svg';
import {
  FormikForm,
  FormikField,
  Logo,
  StyledIcon,
  FormGroup,
  Error,
} from './LoginForm.styled';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Nieprawidłowy adres e-mail')
    .required('To pole jest wymagane'),
  password: Yup.string()
    .min(6, 'Hasło musi mieć co najmniej 6 znaków')
    .max(12, 'Hasło nie może mieć więcej niż 12 znaków')
    .required('To pole jest wymagane'),
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
        <Logo>
          <img src={wallet} alt="wallet" />
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
          <Error name="email" component="div" />
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
          <Error name="password" component="div" />
        </FormGroup>
        <div className="button-group">
          <button type="submit">Zaloguj</button>
          <button type="button">Zarejestruj</button>
        </div>
      </FormikForm>
    </Formik>
  );
};

export default LoginForm;
