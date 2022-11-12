import React from 'react';

function PrevEventCard({itm}) {
    return (
        <div className='relative h-60 w-full'>
            <img className='absolute top-0 h-full px-2' src={itm.img} alt={itm.name}/>

        </div>
    );
}

export default PrevEventCard;