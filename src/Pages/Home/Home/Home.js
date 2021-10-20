import React from 'react';



import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import CountBox from '../CountBox/CountBox';

import FAQ from '../FAQ/FAQ';

import Services from '../Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <FAQ></FAQ>
            <AboutUs></AboutUs>
            <CountBox></CountBox>






        </div>
    );
};

export default Home;