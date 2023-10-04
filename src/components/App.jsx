import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './Navigation/Navigation';

const Home = lazy(() => import('pages/dashboard/PH_dashboard'));
const Register = lazy(() => import('pages/register/PH_register'));
const Login = lazy(() => import('pages/login/PH_login'));
const Statistic = lazy(() => import('pages/statistic/PH_statistic'));
const Currency = lazy(() => import('pages/currency/PH_currency'));

export const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/diagram" element={<Statistic />} />
        <Route path="/currency" element={<Currency />} />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      <Navigation />
    </Suspense>
  );
};
