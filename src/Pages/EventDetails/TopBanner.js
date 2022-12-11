import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Data from '../../Utils/Data';

function TopBanner(props) {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    return (
        <div className='relative' style={{minHeight:'10rem'}}>
            <img loading='lazy' alt='banner' style={{minHeight:'10rem'}} className='h-full w-full' src='/Assets/Images/SecondpgPanner.png'/>

            <div className='flex items-end absolute top-0 w-full h-full bg-DarkBlue bg-opacity-70'>
                <div className='grid grid-cols-2 gap-x-3 items-end text-white px-5 md:px-16 py-2 md:py-10'>
                    <div>
                        <button className='bg-orange text-xs px-4 py-0.5 mb-4'>CONCERT</button>
                        <p className='text-sm md:text-3xl font-semibold'>EXPO 2020 DUBI UAE - Space, 52 king fahd st, riyadh</p>
                    </div>
                    <div className=''>
                        <Carousel
                        swipeable={true}
                        draggable={false}
                        showDots={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                        autoPlaySpeed={1000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile"]}
                        // deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="px-2 lg:px-10"
                        partialVisible={true}
                        
                        // arrows={false} renderButtonGroupOutside={true} 
                        // customButtonGroup={<ButtonGroup/>  }
                        >
                            {Data.OtherEvents.map(i=>{
                                return(
                                    <img loading='lazy' className='w-full h-full px-2' src={i.img} alt={i.name}/>
                                )
                            })}
                        </Carousel>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default TopBanner;