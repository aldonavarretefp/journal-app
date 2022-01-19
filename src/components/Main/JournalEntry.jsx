import React from 'react';

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer mb-1">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundImage: `url("https://www.akamai.com/content/dam/site/im-demo/perceptual-standard.jpg?imbypass=true")`,
                    backgroundSize: 'cover',
                }}    
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    Aliqua irure reprehenderit est enim ut ea.
                </p>
            </div>

            <div className="journal__entry-date-box">
                <p>
                    Monday
                </p>
                <span>
                    <i className="far fa-calendar-alt mr-1"></i>
                    29
                </span>
            </div>
        </div>
    );
};
