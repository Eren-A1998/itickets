import React from 'react';
import CustomButton from './CustomButton';
import MenuIcon from '@mui/icons-material/Menu';

function Header({ ContainerClass = '' }) {
    return (
        <div>
            <div className='md:hidden bg-DarkBlue px-5 md:px-16 py-4 '>
                <MenuIcon sx={{ color: 'white', fontSize:30 }}/>
            </div>

            <div className={'hidden md:flex justify-between bg-DarkBlue text-white font-sans text-sm px-16 py-4' + ContainerClass}>
                <div className='w-50'>
                    <img alt='logo' src='/Assets/Images/logo.png' />
                </div>

                <div className='grid grid-flow-col items-center gap-x-5 text-DarkGray'>
                    <CustomButton className='text-white' value='Home' />
                    <CustomButton value='Browse Events' />
                    <CustomButton value='Support' />
                    <CustomButton value='About Us' />
                </div>

                <div className='flex gap-x-3 justify-center items-center'>
                    <CustomButton value='Sign Up' />
                    <CustomButton value='LOGIN' className='bg-purple px-3 py-1 ' />
                </div>
            </div>
        </div>
    );
}

export default Header;