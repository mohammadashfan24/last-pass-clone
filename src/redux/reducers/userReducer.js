import { LOG_IN, LOG_OUT } from '../actions/user';

const initialState = null;

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return {
                ...state,
                ...action.payload
            };
        case LOG_OUT:
            return initialState;
        default:
            return state;
    }
};
export default userReducer;