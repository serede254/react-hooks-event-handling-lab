// Code EyesOnMe Component Here
import React from 'react';

function FocusBlurButton() {
    // Handler for the focus event
    const handleFocus = () => {
        console.log('Good!');
    };

    // Handler for the blur event
    const handleBlur = () => {
        console.log('Hey! Eyes on me!');
    };

    return (
        <div>
            <button onFocus={handleFocus} onBlur={handleBlur}>
                Eyes on me
            </button>
        </div>
    );
}

export default FocusBlurButton;
