import React from 'react';

export const NothingSelected = () => {
    return (
        <div className="nothing__main-content">
            <p>
                Select something
                <br />
                or 
                <span><i className="fas fa-plus-circle mr-1"></i>
                Create an Entry!</span>
            </p>
        </div>
    );
};
