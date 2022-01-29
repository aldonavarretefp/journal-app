import { types } from '../types/types';
/*
{
    notes: []
    active: null
    active: {
        id: 1,
        title: '',
        body: '',
        images: [],
        date: '',
    }    
}
 */

const initialState = {
    notes: [],
    active: null,
}
export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.NOTES_SET_ACTIVE:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case types.NOTES_ADD_NOTE:
            return {
                ...state,
                notes: [
                    action.payload,
                    ...state.notes
                ]
            }
        case types.NOTES_SET_NOTES:
            return {
                ...state,
                notes: [...action.payload]
            }
        case types.NOTES_UPDATE_NOTE:
            return {
                ...state,
                notes: state.notes.map(note => (
                    note.id === action.payload.id ?
                    action.payload.note  
                    : note
                ))
            }
        case types.NOTES_DELETE_NOTE:
            return {
                ...state,
                notes: state.notes.filter(note => note.id !== action.payload),
                active: null
            }
        case types.NOTES_CLEAR:
            return {
                ...state,
                ...initialState
            }

        default:
            return state;
    }
}