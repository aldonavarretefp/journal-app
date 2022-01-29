import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { JournalEntries } from './JournalEntries';
import { startLogout } from '../../actions/auth';
import { startLoadingNotes, startNewNote } from '../../actions/notes';

export const SideBar = () => {
    
    
    const dispatch = useDispatch();
    const {displayName, photoURL } = useSelector(state => state.auth);
    

    const handleLogout = () => {
        dispatch(startLogout());
        console.log("logged out");
    }
    
    const handleAddNewEntry = () => {
        console.log('new entry');
        dispatch(startNewNote());
    }
    return (
        <div className='journal__sidebar'>

            <div className="journal__sidebar-navbar">
                <h3>
                    {photoURL?
                        <img
                        alt='user'
                        className='journal__sidebar-navbar-user-image'
                        src={photoURL}
                    />
                    :
                        <i className="fas fa-user-circle journal__sidebar-navbar-user-image"></i>
                    }
                    <span className='ml-1'>{displayName}</span>
                </h3>
                <button
                    className="btn btn-primary"
                    onClick={handleLogout}
                >
                    <i className="fas fa-regular fa-right-from-bracket mr-1"></i>
                    Logout
                </button>
            </div>
            
            <div 
                className="journal__new-entry"
                onClick={handleAddNewEntry}
            >
                <i className="fas fa-light fa-calendar-plus"></i>
                <p>New entry</p>
            </div>


            <JournalEntries />
        </div>
    );

};
