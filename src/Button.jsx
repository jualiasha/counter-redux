import React from 'react';

const Button = ({children, click, type="button"}) => {
    return (
        <button onClick={click} type={type}>
            {children}
        </button>
    );
};

export default Button;