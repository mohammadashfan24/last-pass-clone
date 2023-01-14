export const LOGIN = '/api/v1/login';
export const REGISTER = '/api/v1/register';
export const LIST = '/api/v1/list';
export const SAVE = '/api/v1/save';
export const EDIT = '/api/v1/edit';
export const DELETE = ({ type, userId, id }) => `/api/v1/delete/${type}/${userId}/${id}`;
export const USER = '/api/v1/user';
