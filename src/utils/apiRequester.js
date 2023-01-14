export const getRequest = (api, additonalHeaders = {}) => {
    const options = {
        method: 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            ...additonalHeaders
        },
    };

    return fetch(api, options).then(data => data.json());
};

export const postRequest = (api, payload, additonalHeaders = {}) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            ...additonalHeaders
        }
    };

    return fetch(api, options).then(data => data.json());
};

export const deleteRequest = (api, additonalHeaders = {}) => {
    const options = {
        method: 'DELETE', headers: {
            "Content-type": "application/json; charset=UTF-8",
            ...additonalHeaders
        }
    };

    return fetch(api, options).then(data => data.json());
};

export const putRequest = (api, payload, additonalHeaders = {}) => {
    const options = {
        method: 'PUT',
        body: JSON.stringify(payload),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            ...additonalHeaders
        },
    };

    return fetch(api, options)
        .then(data => data.json());
};