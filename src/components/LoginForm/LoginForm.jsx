import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import wallet from '../../assets/icons/wallet/wallet.png';
import icons from '../../assets/icons/login/icons.svg';

// Schema walidacji z yup
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
    <div className="login-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="wallet">
            <img src={wallet} alt="wallet" />
            <p>Wallet</p>
          </div>
          <div className="form-group">
            <svg className="icon" width="21" height="16">
              <use xlinkHref={`${icons}#message`} fill="#E0E0E0" />
            </svg>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Wprowadź e-mail"
            />
            <ErrorMessage name="email" component="div" className="error" />
          </div>
          <div className="form-group">
            <svg className="icon" width="17" height="21">
              <use xlinkHref={`${icons}#password`} fill="#E0E0E0" />
            </svg>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Wprowadź hasło"
            />
            <ErrorMessage name="password" component="div" className="error" />
          </div>
          <div className="button-group">
            <button type="submit">Zaloguj</button>
            <button type="button">Zarejestruj</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
