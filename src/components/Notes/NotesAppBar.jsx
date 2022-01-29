import React from 'react';
import moment from 'moment';
import Swal from 'sweetalert2';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import 'animate.css'

import { startSavingNote, startUploading, startDeleteNote } from '../../actions/notes';

export const NotesAppBar = ({date}) => {

    const dispatch = useDispatch();
    const {active:note} = useSelector( state => state.notes );
    
    const handleSave = () => {
        dispatch(startSavingNote(note));
        
        //animation
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your note has been saved',
            showConfirmButton: false,
            timer: 1500,
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
    }
    const handlePicture = () => {
        Swal.fire({
            title: 'Select image',
            color: 'white',
            background: '#2D3142',
            backdrop: `
                rgba(0,0,0,0.4)
            `,
            input: 'file',
            inputAttributes: {
                'accept': 'image/*',
                'aria-label': 'Upload your picture'
            }
        }).then( ({value}) => {
            if(!value){
                return;
            }
            dispatch(startUploading(value));

        })
    }

    const handleDelete = () => {
        dispatch(startDeleteNote(note.id));
    }

    return <div className="notes__appbar">
        <span>
            {
                moment(date).format('dddd, MMMM Do YYYY')
            }
        </span>

        <div>
            <button className="btn btn-danger mr-1" onClick={handleDelete}>
                Delete Note
            </button>
            <button 
            className="btn mr-1"
            onClick={handlePicture}
            >
                Picture
            </button>
            <button 
                className="btn btn-primary"
                onClick={handleSave}
            >
                Save
            </button>
        </div>



    </div>;
};
