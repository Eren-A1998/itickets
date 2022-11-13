import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Data from '../../Utils/Data';
import PrevEventCard from './PrevEventCard';


function Section3(props) {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

    return (
        <div className='relative  bg-DarkBlue'> 

            <div className='absolute top-0 left-0 h-full w-full'>         
                <img alt='bg' className='relative h-full w-full' src='/Assets/Images/section3img.png'/>
                <div className='absolute top-0 w-full h-full bg-DarkBlue bg-opacity-80'></div>
            </div>

            

            <div className='text-white w-full py-16 z-10' >
                <div className='flex justify-between md:px-16 px-5'>
                    <p className='text-3xl font-semibold z-10'>PREVIOUS EVENTS</p>
                </div>


                {/* events */}
                <div className='my-20 md:pl-16 pl-5 my-own-custom-container'>
                    <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                    responsive={responsive}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    containerClass="carousel-container"
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="px-3"
                    partialVisible={true}
                    >
                        {Data.OtherEvents.map(i=>{
                            return(
                                <PrevEventCard itm={i}/>
                            )
                        })}
                    </Carousel>
                </div>
            </div>
            
        </div>
    );
}

export default Section3;