import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from 'layout/layout';
import WithAuthRedirect from 'routes/authRedirect';

const Home = lazy(() => import('pages/dashboard/DashboardPage'));
const Register = lazy(() => import('pages/register/RegistrationPage'));
const Login = lazy(() => import('pages/login/LoginPage'));
const Statistic = lazy(() => import('pages/statistic/StatisticPage'));
const Currency = lazy(() => import('pages/currency/CurrencyPage'));
// const Layout = lazy(() => import('../layout/layout'));

const App = () => {
  return (
    <Suspense>
      <Routes>
        
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<WithAuthRedirect children={<Layout />} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/diagram" element={<Statistic />} />
          <Route path="/currency" element={<Currency />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      <ToastContainer />
    </Suspense>
  );
};

export default App;

// ----> // Route path="/" element={<Navigate to="/login" />