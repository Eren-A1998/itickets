import React from 'react';
import { Grid } from '@mui/material';
import Data from '../../Utils/Data';
import BorderLine from '../../Components/BorderLine';

function MiddleSection(props) {
    return (
        <div className='bg-grey bg-opacity-30 py-5 px-5 md:px-16'>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 8 }}>
                <Grid item sm={8}>
                    <div className='p-3 bg-white mb-5 md:mb-0'>
                        <img loading='lazy' className='w-full mb-2' alt='banner' src='/Assets/Images/pg2img2.png'/>

                        <div>
                            <p className='text-DarkBlue font-bold mb-3'>DESCRIPTION</p>
                            <div className='flex justify-between gap-x-2 mb-5 px-5'>
                                <div className='w-1/2'>
                                    <ul className='list-disc'>
                                        <li className='text-pink mb-1'>Riyadh</li>
                                        <li className='mb-1'>15 November 2021 - 07:00 PM</li>
                                        <li className='mb-1'>Starts 07:00 PM</li>
                                        <li className='mb-1'>Space, 52 king fahd st, riyadh</li>
                                    </ul>
                                </div>
                                <div className='w-1/2'>
                                    <img className='w-full' alt='logo' src='/Assets/Images/pg2img3.png'/>
                                </div>
                            </div>
                            <p className='text-anotherGrey'>The toppings you may choour face tose for that TV dise for that TV dinner pizza slice when you forgot to shoour face tose for that TV dip for foods, the paint you may slap on your face tose for that.</p>

                            <BorderLine className='my-5'/>
                            <p className='text-DarkBlue font-bold mb-3'>PROMO VIDEO</p>
                            <img loading='lazy' className='w-full mb-2' alt='banner' src='/Assets/Images/pg2img2.png'/>
                        </div>
                    </div>
                </Grid>

                <Grid item sm={4}>
                    <div className='text-white'>
                        <button className='bg-purple text-sm w-full py-2 mb-3'>book a ticket</button>
                        
                        <div className='bg-white p-3 mb-8'>
                            <p className='text-DarkBlue font-bold mb-5'>TICKETS PRICES</p>

                            {Data.TicketPrices.map(i=>{
                                return(
                                    <div key={i.id}>
                                        <div className='flex justify-between font-semibold text-xs'>
                                            <p className='text-anotherGrey '>{i.type}</p>
                                            <p className='text-pink'>{i.price}</p>
                                        </div>
                                        {i.id !== Data.TicketPrices.length && <BorderLine className='bg-grey my-4'/>}

                                    </div>
                                )
                            })}

                        </div>

                        <div className='bg-white p-3'>
                            <p className='text-DarkBlue font-bold mb-3'>LOCATION</p>
                            <img loading='lazy' className='w-full' alt='map' src='/Assets/Images/map.png'/>
                        </div>
                    </div>
                </Grid>

            </Grid>
            
        </div>
    );
}

export default MiddleSection;