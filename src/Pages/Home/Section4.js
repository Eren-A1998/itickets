import { BedTwoTone } from '@mui/icons-material';
import { Grid } from '@mui/material';
import React from 'react';
import CustomButton from '../../Components/CustomButton';

function Section4(props) {
    return (
        <div className='relative -top-20'>
            <Grid container>
                <Grid sm={2}></Grid>
                <Grid item sm={8}>
                    <div className='w-full p-3 bg-white'>
                        <div className='relative'>
                            <img className='w-full h-44' alt='img1' src='/Assets/Images/section4img1.png'/>
                            
                            <div className='flex flex-col items-center absolute top-0 bg-DarkBlue bg-opacity-80 text-white w-full h-full py-5'>
                                <img className='my-5' alt='logo' src='/Assets/Images/logo.png' />
                                <p>We Are Your Partners When It Comes to FInd Events!</p>
                            </div>
                        </div>
                        {/* <CustomButton className='bg-purple' value='' */}
                        
                    </div>
                </Grid>
                <Grid sm={2}></Grid>
            </Grid>           
        </div>
    );
}

export default Section4;