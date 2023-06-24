import React from 'react';
import Header from './Header';
import Body from './Body';
import Heading from '../components/Heading';
import image from '../assets/2.jpg'
import Posts from '../components/Posts';

const Main = () => {
    return (
        <div className='bg-gradient-to-r from-[#F5F5DC] to-[#D2B48C] min-h-[100vh]'>
            <img src={image} alt="" className='opacity-20 w-full h-screen'/>
            <div className='absolute inset-0'>
                <Header />
                <Body />
            </div> 
            <div className='flex'>
                <Posts />
                <div className='w-[1px] h-[100vh] bg-gray-600'></div>
                <div className='ads p-5 text-[26px] font-medium text-center w-[300px]'>Adverts</div>
            </div>                       
        </div>
    );
};

export default Main;