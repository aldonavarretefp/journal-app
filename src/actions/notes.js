import { db } from "../firebase/firebaseConfig";
import { types } from '../types/types';
import { loadNotes } from '../helpers/notes';
import { fileUpload } from '../helpers/fileUpload';
import Swal from "sweetalert2";


export const startNewNote = (title = '', body = '', images = []) => {
    return async (dispatch, getState) => {
        const state = getState();
        const { auth: { uid } } = state;
        const newNote = {
            title,
            body,
            date: new Date().getTime(),
            images,
        }
        const doc = await db.collection(`${uid}/journal/notes`).add(newNote);
        dispatch(activeNote(doc.id, newNote));
        dispatch(adddNewNote(doc.id, newNote));
    }
}

export const startLoadingNotes = (uid) => {
    return async (dispatch, getState) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}
export const startSavingNote = (note) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        const noteToFirestore = { ...note };
        delete noteToFirestore.id;
        await db.doc(`${uid}/journal/notes/${note.id}`).update(noteToFirestore);
        dispatch(refreshNote(note.id, noteToFirestore));
    }
}

export const startUploading = (file) => {
    return async (dispatch, getState) => {
        const { active: activeNote } = getState().notes;
        Swal.fire({
            title: 'Wait ...',
            text: 'Uploading file',
            onBeforeOpen() {
                Swal.showLoading()
            },
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            position: 'top-end',
            icon: 'success',
            showConfirmButton: false,
        })
        const fileUrl = await fileUpload(file);
        activeNote.images.push(fileUrl);
        dispatch(startSavingNote(activeNote));
        setTimeout(() => {
            Swal.close();
        }, 1500);


    }

}
export const startDeleteNote = (noteId) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        try {
            await db.doc(`${uid}/journal/notes/${noteId}`).delete();
            dispatch(deleteNote(noteId));
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your note has been deleted',
                showConfirmButton: false,
                timer: 1000,
                width: 600,
                toast: true,
                background: '#2D3142',
                color: '#fff',
                showClass: {
                    popup: 'animate__animated animate__backInRight animate__faster'
                },
                hideClass: {
                    popup: 'animate__animated animate__backOutRight animate__faster'
                }
                
            })
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'Something went wrong',
                icon: 'error',
                confirmButtonText: 'Ok',
            });
        }
    }
}

export const adddNewNote = (id, note) => ({
    type: types.NOTES_ADD_NOTE,
    payload: {
        id,
        ...note
    }
});

export const deleteNote = (id) => (
    {
        type: types.NOTES_DELETE_NOTE,
        payload: id
    }
);

export const refreshNote = (id, note) => (
    {
        type: types.NOTES_UPDATE_NOTE,
        payload: {
            id,
            note: {
                id,
                ...note
            }
        }
    }
)


export const activeNote = (id, note) => ({
    type: types.NOTES_SET_ACTIVE,
    payload: {
        id,
        ...note
    }

})

export const clearNotes = () => ({
    type: types.NOTES_CLEAR
})

export const setNotes = (notes) => ({
    type: types.NOTES_SET_NOTES,
    payload: notes
})

export const saveNote = (note) => ({
    type: types.NOTES_SAVE_NOTE,
    payload: note
})


