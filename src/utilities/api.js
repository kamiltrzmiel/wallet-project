import { setAuthToken } from './authUtils';
import Cookies from 'js-cookie';
import { WalletInstance } from './authUtils';

import { cookieOptions } from './authUtils';
//export const API_URL = 'https://modern-gold-fatigues.cyclic.app';
export const API_URL = 'https://dev.optiall.pl:4000';
setAuthToken();

export const registerUser = async userData => {
  const response = await WalletInstance.post(`${API_URL}/api/users/register`, userData);

  const { accessToken } = response.data;

  Cookies.set('accessToken', accessToken, cookieOptions);
  // Cookies.set('refreshToken', refreshToken, cookieOptions);

  return response.data;
};

export const loginUser = async loginData => {
  const response = await WalletInstance.post(`${API_URL}/api/users/login`, loginData);

  const { token } = response.data;

  Cookies.set('token', token, cookieOptions);
  // Cookies.set('refreshToken', refreshToken, cookieOptions);

  return response.data;
};

export const getUserProfile = async () => {
  const response = await WalletInstance.get(`${API_URL}/api/users/profile`);

  return response.data;
};

export const logoutUser = async () => {
  await WalletInstance.get(`${API_URL}/api/users/logout`);
  Cookies.remove('token', { path: '/' });
  // Cookies.remove('refreshToken', { path: '/' });
};

export const createTransaction = async transactionData => {
  const response = await WalletInstance.post(`${API_URL}/api/transactions`, transactionData);
  console.log('response from createTransaction', response);

  return response.data;
};

export const getTransactions = async () => {
  const response = await WalletInstance.get(`${API_URL}/api/transactions`);

  return response.data;
};

export const deleteTransaction = async transactionId => {
  const response = await WalletInstance.delete(`${API_URL}/api/transactions/${transactionId}`);

  return response.data;
};

export const updateTransaction = async (transactionId, updatedData) => {
  const response = await WalletInstance.patch(
    `${API_URL}/api/transactions/${transactionId}`,
    updatedData
  );

  return response.data;
};

export const filterTransactions = async (month, year) => {
  const response = await WalletInstance.get(`${API_URL}/api/transactions/${month}/${year}`);

  return response.data;
};

export const getCategoryTotals = async () => {
  const response = await WalletInstance.get(`${API_URL}/api/transactions/categories/totals`);

  return response.data;
};

export const getMonthlyCategoryTotals = async (month, year) => {
  const response = await WalletInstance.get(`${API_URL}/api/transactions/${month}/${year}`);

  return response.data;
};
