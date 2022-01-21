import { types } from '../types/types';

const initialState = {
    isLoading: false,
    msgError: null,
};

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.UI_SET_ERROR:
            return {
                ...state,
                msgError: action.payload,
            };
        case types.UI_REMOVE_ERROR:
            return {
                ...state,
                msgError: null,
            };
        case types.UI_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case types.UI_LOADING_END:
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
}