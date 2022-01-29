import { useDispatch } from 'react-redux';
import moment from 'moment';
import 'animate.css'

import { activeNote } from '../../actions/notes';

export const JournalEntry = ({id,title,body,date,images}) => {
    const dispatch = useDispatch();
    const handleSetActive = () => {
        dispatch(activeNote(id,{
            title,
            body,
            date,
            images
        }));
    }

    

    return (
        <div 
            className="journal__entry pointer animate__animated animate__fadeIn animate__faster"
            onClick={handleSetActive}

        >
            { images && 
                <div 
                    className="journal__entry-picture"
                    style={{
                        backgroundImage: `url(${images[0]})`,
                        backgroundSize: 'cover',
                    }}    
                ></div>
            }

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    {title || 'Untitled'}
                </p>
                <p className="journal__entry-content">
                    {body || 'No content'}
                </p>
            </div>

            <div className="journal__entry-date-box">
                <p>
                    {
                        moment(date).format('ddd') 
                    }
                </p>
                <span>
                    {
                        moment(date).format('MMM') 
                    }
                </span>
                <span>
                    <i className="far fa-calendar-alt mr-1"></i>
                    {
                        moment(date).format('DD')
                    }
                </span>
            </div>
        </div>
    );
};
