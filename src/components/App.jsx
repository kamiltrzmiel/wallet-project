import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// const Home = lazy(() => import('pages/dashboard/DashboardPage'));
const Register = lazy(() => import('pages/register/RegistrationPage'));
// const Login = lazy(() => import('pages/login/LoginPage'));
const Login = lazy(() => import('pages/LoginPage/LoginPage'));
const Statistic = lazy(() => import('pages/statistic/PH_statistic'));
const Currency = lazy(() => import('pages/currency/PH_currency'));

const isAuth = false;

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {isAuth ? (
          <Route>
            {/* <Route path="/home" element={<Home />} /> */}
            <Route path="/diagram" element={<Statistic />} />
            <Route path="/currency" element={<Currency />} />
          </Route>
        ) : (
          <Route path="*" element={<Navigate to="/login" />} />
        )}

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Suspense>
  );
};
