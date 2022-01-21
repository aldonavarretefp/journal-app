import React from 'react';
import { useDispatch } from 'react-redux';
import { JournalEntries } from './JournalEntries';
import { startLogout } from '../../actions/auth';

export const SideBar = () => {


    const dispatch = useDispatch();


    const handleLogout = () => {
        dispatch(startLogout());
    }
    return (
        <div className='journal__sidebar'>

            <div className="journal__sidebar-navbar">
                <h3>
                    <i className="fas fa-moon"></i>
                    <span className='ml-1'>Aldo</span>
                </h3>
                <button
                    className="btn btn-primary"
                    onClick={handleLogout}
                >
                    <i className="fas fa-regular fa-right-from-bracket mr-1"></i>
                    Logout
                </button>
            </div>

            <div className="journal__new-entry">
                <i className="fas fa-light fa-calendar-plus"></i>
                <p>New entry</p>
            </div>


            <JournalEntries />
        </div>
    );

};
