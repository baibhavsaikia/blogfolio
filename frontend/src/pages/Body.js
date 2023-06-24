import React, { useEffect, useState } from 'react';
import CreatePost from '../components/CreatePost';
import Heading from '../components/Heading';

const Body = () => {
    
    return (
        <div className='mx-[100px] my-[50px] flex h-[100vh]'>
            <Heading />
            <CreatePost /> 
        </div>
    );
};

export default Body;