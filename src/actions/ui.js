
import { types } from '../types/types';

export const setError = (err) => {
    return {
        type: types.UI_SET_ERROR,
        payload: err,
    };
};

export const removeError = () => {
    return {
        type: types.UI_REMOVE_ERROR,
    };
}

export const setLoading = () => {
    return {
        type:types.UI_LOADING,
    };
}
export const setLoadingEnd = () => {
    return {
        type:types.UI_LOADING_END,
    };
}

