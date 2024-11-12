import React from 'react';
import Banner from '../Banner/Banner';
import JobCatagoris from '../JobCatagoris/JobCatagoris';
import FeaturedJobs from '../FeaturedJobs/FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCatagoris></JobCatagoris>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;