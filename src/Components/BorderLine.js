import React from 'react';

function BorderLine({className=''}) {
    return (
        <div className={'h-px w-full bg-DarkGray ' + className}></div>
    );
}

export default BorderLine;