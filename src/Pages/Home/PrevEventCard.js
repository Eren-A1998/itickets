import React from 'react';

function PrevEventCard({itm}) {
    return (
        <div className='relative h-60 w-full'>
            <img className='h-full px-2' src={itm.img} alt={itm.name}/>
            <div className=' flex flex-col items-center justify-end absolute top-0 bg-DarkBlue bg-opacity-40  h-full w-full pb-5 px-1'>
                <p className='text-orange text-xs font-semibold mb-1'>{itm.date}</p>
                <p className='text-white text-lg font-semibold text-center'>{itm.name}</p>
                <p className='text-white text-xs'>{itm.locatin}</p>
            </div>
        </div>
    );
}

export default PrevEventCard;