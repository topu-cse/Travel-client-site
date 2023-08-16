import React from 'react';
import Banner from '../Banner/Banner';
import Discover from '../Discover/Discover';
import Services from '../Service/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Discover></Discover>
        </div>
    );
};

export default Home;