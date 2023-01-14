import { SAMPLE_ACTION } from '../actions/example';

const initialState = {
    name: ''
};

const modalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAMPLE_ACTION:
            return {
                ...state,
                name: action.name
            };
        default:
            return state;
    }
};
export default modalReducer