import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input 
                type="text"
                placeholder='Some awesome title'
                className="notes__title-input"
                autoComplete='off'                            
                />
                <textarea
                placeholder='What happened today?'
                className="notes__text-area"
                autoComplete='off'            
                />

            </div>

            <div className="notes__image"> 
                <img src="https://images.unsplash.com/photo-1537944434965-cf4679d1a598?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt="imagen"/>
            </div>

        </div>
    );
};
