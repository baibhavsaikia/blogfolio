import React from 'react';
import Header from './Header';
import Body from './Body';
import Heading from '../components/Heading';

const Main = () => {
    return (
        <div className='bg-[#F5F5DC] h-screen'>
            <Header />
            <Heading />
            <Body />
        </div>
    );
};

export default Main;