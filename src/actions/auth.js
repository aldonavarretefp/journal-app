
import 'animate.css';

import { types } from '../types/types';
import { firebase, googleAuthProvider } from '../firebase/firebaseConfig';
import { setLoading, setError, setLoadingEnd, removeError } from './ui';
import { showAlert } from '../helpers/auth';
import { clearNotes } from './notes';





export const startLoginEmailPassword = (email, password) => {
    return (dispatch) => {
        dispatch(setLoading());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                console.log(user);
                dispatch(login(user.uid, user.displayName));
                dispatch(removeError());
            }).catch(e => {
                console.log(e);
                dispatch(setError(e.message));
                showAlert(e.message);

            }).finally(() => {
                dispatch(setLoadingEnd());
                dispatch(removeError());
            })

    }

};

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({ user }) => {
                await user.updateProfile({
                    displayName: name,
                });

                dispatch(
                    login(user.uid, user.displayName)
                );
            }).catch((err) => {
                console.log(err);
                showAlert(err.message)
            });
    }
};

export const startLoginGoogle = () => {
    return (dispatch) => {
        dispatch(setLoading());
        firebase.auth().signInWithPopup(googleAuthProvider)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName,user.photoURL));
            }).catch(e => {
                console.log(e);
                dispatch(setError(e.message));
            }).finally(() => {
                dispatch(setLoadingEnd());
            })
    };
}

export const login = (uid, displayName,photoURL = null) => ({
    type: types.LOGIN,
    payload: {
        uid,
        displayName,
        photoURL
    }
});

export const startLogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout());
        dispatch(clearNotes());
    }
}



export const logout = () => ({
    type: types.LOGOUT
});
