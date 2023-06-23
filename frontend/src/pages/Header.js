import React from 'react';
import {GiNotebook} from 'react-icons/gi'
import SearchBar from '../components/SearchBar';

const Header = () => {
    return (
        <div className='bg-[#D2B48C] text-[black] px-14 py-5 flex items-center justify-between'>
            <div className='flex items-center font-medium'>
                <GiNotebook className='text-[26px] ' />
                <div className='ml-3 text-[18px] '>
                    BlogFolio
                </div>
            </div>
            <SearchBar />
            <div>
                <button className='bg-landing-secondary text-gray-200 font-medium py-2 px-5 rounded-xl hover:scale-110'>
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default Header;