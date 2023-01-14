import { postRequest } from './apiRequester'
import { LOGIN, REGISTER } from '../constants/apis';

export const login = (payload) => {
    return postRequest(LOGIN, payload);
};

export const logout = () => {
    window.localStorage.removeItem('token');
};

export const register = (payload) => {
    return postRequest(REGISTER, payload);
};

export const isLoggedIn = () => {
    return !!window.localStorage.getItem('token');
};