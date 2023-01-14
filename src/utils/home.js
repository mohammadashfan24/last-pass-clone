import { getRequest, postRequest, deleteRequest } from './apiRequester'
import { LIST, SAVE, EDIT, USER, DELETE } from '../constants/apis';

export const getUser = () => {
    const token = window.localStorage.getItem('token');
    const additonalHeaders = { token: `bearer ${token}` }
    return getRequest(USER, additonalHeaders);
};

const getGroupedCategory = (arr) => {
    const groups = {};
    arr.forEach(item => {
        if (!groups[item.folder]) {
            groups[item.folder] = { items: [], folderName: item.folder };
        }
        groups[item.folder].items.push(item);
    });
    return Object.values(groups);
};

export const getList = (payload) => {
    const token = window.localStorage.getItem('token');
    const additonalHeaders = { token: `bearer ${token}` }
    return postRequest(LIST, payload, additonalHeaders).then(data => {
        return getGroupedCategory(data);
    }, () => []);
};

export const addCategory = (payload) => {
    const token = window.localStorage.getItem('token');
    const additonalHeaders = { token: `bearer ${token}` };
    return postRequest(SAVE, payload, additonalHeaders);
}

export const editCategory = (payload) => {
    const token = window.localStorage.getItem('token');
    const additonalHeaders = { token: `bearer ${token}` };
    return postRequest(EDIT, payload, additonalHeaders);
}

export const deleteCategory = (payload) => {
    const token = window.localStorage.getItem('token');
    const additonalHeaders = { token: `bearer ${token}` };
    return deleteRequest(DELETE(payload), additonalHeaders);
}