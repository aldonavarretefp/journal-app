import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { startLoadingNotes, startNewNote } from '../../actions/notes';

export const NothingSelected = () => {
    const dispatch = useDispatch();
    const {uid} = useSelector(state => state.auth);
    const handleAddNewEntry = () => {
        console.log('new entry');
        dispatch(startNewNote());
    }
    return (
        <div className="nothing__main-content">
            <p>
                Select something
                <br />
                or 
                <span
                    onClick={handleAddNewEntry}
                ><i className="fas fa-plus-circle mr-1"></i>
                Create an Entry!</span>
            </p>
        </div>
    );
};
