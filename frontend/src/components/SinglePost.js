import React from 'react';
import image from '../assets/1.jpg'
import dp from '../assets/6.jpg'

const SinglePost = (props) => {
    return (
        <div className='h-[200px] border-2 border-gray-600 p-2 rounded-xl mt-[50px] hover:scale-110 cursor-pointer'>
            <div className='flex bg-[#AEDFF2] bg-opacity-20 h-full w-full rounded-xl'>
                <img src={image} alt="img" className='h-[180px] w-[200px]'/>
                <div className='w-[520px] py-2 px-5'>
                    <div className='text-[36px] font-medium mb-5'>
                        {props.heading}
                    </div>
                    <div>
                        {props.content}
                    </div>
                </div>
                <div className='border-l-[1px] border-gray-600 py-2 px-5'>
                    <div className='flex items-center mb-9'>
                        <img src={dp} alt="dp" className='h-[50px] w-[50px] rounded-full'/>
                        <div className='ml-5'>
                            <div className='font-medium mb-1'>
                                {props.name}
                            </div>
                            <div>
                                {props.createdAt.substr(0,10)}
                            </div>
                        </div>
                    </div>
                    <div className='bg-[black] rounded-3xl text-[18px] text-gray-300 text-center p-1'>
                        {props.category}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePost;