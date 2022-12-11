import React from 'react';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import Section1 from './MiddleSection';
import TopBanner from './TopBanner';

function EventDetails(props) {

    return (
        <div>
            <Header/>
            <TopBanner/>
            <Section1/>
            <Footer/>
        </div>
    );
}

export default EventDetails;