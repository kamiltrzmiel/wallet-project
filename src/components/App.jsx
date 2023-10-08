import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Home = lazy(() => import('pages/dashboard/DashboardPage'));
const Register = lazy(() => import('pages/register/RegistrationPage'));
const Login = lazy(() => import('pages/login/LoginPage'));
const Statistic = lazy(() => import('pages/statistic/StatisticPage'));
const Currency = lazy(() => import('pages/currency/CurrencyPage'));
const Layout = lazy(() => import('../layout/layout'));

const isAuth = true;

const App = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {isAuth ? (
          <Route element={<Layout />}>
            <Route path="/home" element={<Home />} />
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

export default App;
