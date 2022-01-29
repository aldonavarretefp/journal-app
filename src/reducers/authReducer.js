
import { types } from '../types/types';


export const authReducer = (state={}, action) => {
    switch (action.type) {
        case types.LOGIN:
            return {
                uid: action.payload.uid,
                displayName: action.payload.displayName,
                photoURL: action.payload.photoURL
            }
        case types.LOGOUT:
            return {};
        default:
            return state
    }
};
