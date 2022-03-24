
import { types } from '../../types/types';


describe('Pruebas con los types', () => {
    test('Debe tener los tipos', () => {
        console.log(types);
        expect(types).toEqual({
            AUTH_ERROR: '[AUTH] SET ERROR',
            LOGIN: '[AUTH] LOGIN',
            LOGOUT: '[AUTH] LOGOUT',
            
            UI_LOADING: '[UI] LOADING',
            UI_LOADING_END: '[UI] LOADING END',
            UI_SET_ERROR: '[UI] SET ERROR',
            UI_REMOVE_ERROR: '[UI] REMOVE ERROR',
        
            NOTES_SET_ACTIVE: '[NOTES] SET ACTIVE',
            NOTES_ADD_NOTE: '[NOTES] ADD NOTE',
            NOTES_SET_NOTES: '[NOTES] SET NOTES',
            NOTES_UPDATE_NOTE: '[NOTES] UPDATE NOTE',
            NOTES_DELETE_NOTE: '[NOTES] DELETE NOTE',
            NOTES_CLEAR: '[NOTES] CLEAR',
        
        });
    })
    
});