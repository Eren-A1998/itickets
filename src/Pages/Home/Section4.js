import { Grid } from '@mui/material';
import React from 'react';
import CustomButton from '../../Components/CustomButton';

function Section4(props) {
    return (
        <div className='relative -top-20 '>
            <Grid container>
                <Grid xs={1} md={2}></Grid>
                <Grid item xs={9} md={8}>
                    <div className='w-full p-3 bg-white text-white shadow-md'>
                        <div className='relative'>
                            <img className='w-full h-44' alt='img1' src='/Assets/Images/section4img1.png'/>
                            
                            <div className='flex flex-col items-center absolute top-0 bg-DarkBlue bg-opacity-80 text-white w-full h-full py-5 px-5'>
                                <img className='my-5' alt='logo' src='/Assets/Images/logo.png' />
                                <p className='text-center'>We Are Your Partners When It Comes to FInd Events!</p>
                            </div>
                        </div>

                        <div className='flex flex-col  items-center my-5 text-black'>
                            <p className='mb-5 font-semibold'>TRUSTED BY</p>
                            <div className='grid grid-flow-col gap-x-6 md:gap-x-8 py-5 md:px-10'>
                                <img alt='brand1' src='/Assets/Images/brand1.png'/>
                                <img alt='brand2' src='/Assets/Images/brand2.png'/>
                                <img alt='brand3' src='/Assets/Images/brand3.png'/>
                                <img alt='brand4' src='/Assets/Images/brand4.png'/>
                            </div>
                        </div>
                        
                        <div className='flex justify-center text-sm my-5'>
                            <CustomButton className='bg-purple px-5 py-2' value='DISCOVER EVENTS' />
                        </div>
                        
                    </div>
                </Grid>
                <Grid xs={1} md={2}></Grid>
            </Grid>           
        </div>
    );
}

export default Section4;