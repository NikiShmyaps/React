import React from 'react';
import img from './error.jpg'

const ErrorMessage = () => {
    return (
        <>
            <span>Something goes wrong</span>
            <img src={img} alt='error'></img>
        </>
        
    )
}

export default ErrorMessage;