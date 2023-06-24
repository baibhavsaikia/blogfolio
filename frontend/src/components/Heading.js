import React from 'react';

const Heading = () => {
    return (
        <div className='mt-5 font-custom text-center w-1/2'>
            <div className='text-[16px] mb-8'>
                Our blog
            </div>
            <div className='text-[36px] font-semibold mb-5'>
                Unleash Your Inner Wordsmith: Explore the Realm of BlogFolio!
            </div>
            <div className="flex flex-col items-center big text-[84px] font-extrabold bg-gradient-to-r from-[#FFA45B] to-[#E65568] text-[transparent] bg-clip-text leading-[110px] italic">
                <div className="">Connect</div>
                <div className="">Inspire</div>
                <div className="">Empower</div>
            </div>
        </div>
    );
};

export default Heading;