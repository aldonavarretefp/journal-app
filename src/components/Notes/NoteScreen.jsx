import React, { useEffect, useRef } from 'react';
import { useSelector,useDispatch } from 'react-redux';

import 'animate.css'

import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';
import { activeNote, startSavingNote } from '../../actions/notes';

export const NoteScreen = () => {
    const dispatch = useDispatch();

    const {active:note} = useSelector( state => state.notes );
    const activeId = useRef(note.id);
    // console.log(note);
    const [formValues, handleInputChange, reset ] = useForm( note );

    const { title, body,date,images } = formValues;

    useEffect(() => {
        dispatch(activeNote(activeId.current,{...formValues}));
        dispatch(startSavingNote({...formValues}));
    }, [formValues,dispatch]);

    useEffect(() => {
        if(activeId.current !== note.id) {
            reset(note);
            activeId.current = note.id;
        }
    }, [note, reset]);
    

    useEffect(()=>{
        setTimeout(() => {
            document.querySelector('.notes__title-input').focus();
        }, 1000);
        
    },[]);
    return (
        <div className="notes__main-content animate__animated  animate__fadeIn animate__faster">
            <NotesAppBar date={date} />

            <div className="notes__content">
                <textarea 
                className="notes__title-input"
                type="text"
                name="title"
                value={title}
                onChange={handleInputChange}
                placeholder={title || 'Some awesome title . . .'}
                autoComplete='off'                            
                />
                <textarea
                name="body"
                value={body}
                onChange={handleInputChange}
                placeholder={body || 'What happened today?'}
                className="notes__text-area"
                autoComplete='off'            
                />

            </div>

            <div  className="notes__image mb-5"> 
                    {
                        images &&
                        images.map( (image,index) => (
                            <img key={index} src={image} alt="imagen"/>
                        ))
                    }
            </div>

            
        </div>
    );
};
