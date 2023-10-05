import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Nieprawidłowy adres e-mail')
    .required('To pole jest wymagane'),
  password: Yup.string()
    .min(6, 'Hasło musi mieć co najmniej 6 znaków')
    .max(12, 'Hasło nie może mieć więcej niż 12 znaków')
    .required('To pole jest wymagane'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Hasła muszą być takie same')
    .required('To pole jest wymagane'),
  firstName: Yup.string()
    .min(1, 'Imię musi mieć co najmniej 1 znak')
    .max(12, 'Imię nie może mieć więcej niż 12 znaków')
    .required('To pole jest wymagane'),
});

const initialValues = {
  email: '',
  password: '',
  confirmPassword: '',
  firstName: '',
};

const RegistrationForm = () => {
  const handleSubmit = values => {
    //  logika obsługi formularza. wysłanie danych na serwer
    console.log('Dane formularza:', values);
  };

  return (
    <div>
      <img src="" alt="Logo" />
      {/* podmienić logo! z loginform  */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <label htmlFor="email">E-mail</label>
            <Field type="email" id="email" name="email" />
            <svg id="message" /* Tu dodać definicję SVG z loginform*/ />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="password">Hasło</label>
            <Field type="password" id="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <div>
            <label htmlFor="confirmPassword">Potwierdź hasło</label>
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
            />
            <ErrorMessage name="confirmPassword" component="div" />
          </div>

          <div>
            <label htmlFor="firstName">Imię</label>
            <Field type="text" id="firstName" name="firstName" />
            <ErrorMessage name="firstName" component="div" />
          </div>

          <button type="submit">Zarejestruj</button>
        </Form>
      </Formik>
      <button type="button">Zaloguj</button>
    </div>
  );
};

export default RegistrationForm;
