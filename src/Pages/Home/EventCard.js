import React from 'react';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {useNavigate} from 'react-router-dom'

function EventCard({itm}) {
    const navigate=useNavigate()
    return (
        <div className='h-full '>
            <Card sx={{height:'100%'}} className='relative group'>

                <div className='hidden h-full w-full group-hover:flex items-center justify-center absolute top-0 bg-DarkBlue bg-opacity-70 '>
                    <button onClick={()=>{navigate('/eventDetails')}} className='bg-purple px-3 py-1.5 text-white'>book a ticket</button>
                </div>

                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="100%"
                    image={itm.img}
                />
                <CardContent>                    
                    <div className='flex gap-x-2 py-2 px-3'>
                        <div>
                            <p className='text-xs'>{itm.month}</p>
                            <p className='font-bold'>{itm.day}</p>
                        </div>
                        <div className='flex justify-between gap-x-1 w-full'>
                            <div>
                                <p className='font-bold'>{itm.name}</p>
                                <p className='text-xs truncate'>{itm.locatin}</p>
                            </div>
                            <div className='text-pink bg-pink bg-opacity-25 px-2 whitespace-nowrap h-fit'>
                                <p className=''>{itm.price}</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default EventCard;