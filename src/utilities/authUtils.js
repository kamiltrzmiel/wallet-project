import axios from 'axios';
import Cookies from 'js-cookie';
// import { resetSession } from 'redux/slices/sessionSlice';

// export const API_URL = 'https://modern-gold-fatigues.cyclic.app';
export const API_URL = 'https://dev.optiall.pl:4000';

const WalletInstance = axios.create();
export { WalletInstance };

// let dispatchFunction;

export const setDispatch = dispatch => {
  // dispatchFunction = dispatch;
};

export const setAuthToken = () => {
  const token = Cookies.get('token');
  if (token) {
    WalletInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete WalletInstance.defaults.headers.common['Authorization'];
  }
};

export const cookieOptions = {
  expires: 30,
  path: '/',
  secure: true,
  sameSite: 'strict',
};
