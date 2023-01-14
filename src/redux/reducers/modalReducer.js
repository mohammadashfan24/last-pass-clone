import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modalActions';

const initialState = { list: [] };

const modalReducer = (state = initialState, action) => {

    switch (action.type) {
        case OPEN_MODAL:
            return { ...state, list: [...state.list, action.modal] };

        case CLOSE_MODAL:
            return {
                ...state, list: state.list.filter((modal, index) => {
                    return index !== action.modalIndex;
                })
            };
        default:
            return state;
    }
};
export default modalReducer;