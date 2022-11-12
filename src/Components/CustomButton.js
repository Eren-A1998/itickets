import React from 'react';

function CustomButton({value,className=''}) {
    return (
        <button className={className}>{value}</button>
    );
}

export default CustomButton;