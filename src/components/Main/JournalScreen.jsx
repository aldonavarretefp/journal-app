import React from 'react';
import { NoteScreen } from '../Notes/NoteScreen';
import { SideBar } from './SideBar';
import { NothingSelected } from './NothingSelected';
import 'animate.css'
import { useSelector } from 'react-redux';
export const JournalScreen = () => {
  const state = useSelector(state => state.notes);
  const { active } = state;
  return (
    <div className="journal__main-content animate__animated animate__fadeIn">
      <SideBar/>
      <main>  
        {!active
          ?<NothingSelected/>
          :<NoteScreen/>
        }
      </main>
    </div>
  );
};
