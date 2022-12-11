import React, { useState } from 'react';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CustomButton from '../../Components/CustomButton';
import Data from '../../Utils/Data';
import Tabs , { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import EventCard from './EventCard';

function Section2(props) {
    const [value, setValue] = useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='px-5 md:px-16 py-8'>

            {/* title and view all */}
            <div className='flex justify-between gap-x-3 whitespace-nowrap'>
                <p className='font-bold text-lg md:text-3xl text-DarkBlue'>UPCOMING  EVENTS</p>
                <div className='flex items-center gap-x-1'>
                    <CustomButton value='View ALL' className='text-purple font-bold text-sm' />
                    <KeyboardArrowRightIcon sx={{ color: '#563E91', fontSize: 20 }} />
                </div>
            </div>

            {/* scrollable tabs */}
            <div className='pt-5 mt-3'>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    sx={{
                        [`& .${tabsClasses.scrollButtons}`]: {
                          '&.Mui-disabled': { opacity: 0.3 },
                        },
                      }}
                >
                    {Data.tabs.map(itm => {
                        return (
                            <Tab label={itm.name}/>
                        )
                    })}
                </Tabs>
            </div>


            {/* top events */}
            <Grid className='py-8' container rowSpacing={3} columnSpacing={{  md: 3 }}>
                {Data.TopEvents.map(i=>{
                    return(
                        <Grid item xs={12} md={6} key={i.id}>
                            <EventCard itm={i}/>
                        </Grid>
                    )
                })}           
            </Grid>

            {/* top events */}
            <Grid className='py-8' container rowSpacing={3} columnSpacing={{ xs:1, md: 3 }}>
                {Data.OtherEvents.map(i=>{
                    return(
                        <Grid item xs={12}  sm={6} md={3} key={i.id}>
                            <EventCard itm={i}/>
                        </Grid>
                    )
                })}           
            </Grid>

        </div>
    );
}

export default Section2;