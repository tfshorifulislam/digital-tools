import React from 'react';

const Stats = () => {
    return (
        <div>
            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] mb-28'>
                <div className='flex justify-between  gap-3 py-7 lg:py-14 w-10/12 lg:w-6xl mx-auto text-white text-center'>
                    <div className=''>
                        <h2 className='font-semibold md:font-extrabold text-3xl md:text-5xl lg:text-6xl md:mb-5 mb-2'>50K+</h2>
                        <p className='text-lg md:text-xl lg:text-3'>Active Users</p>
                    </div>
                    
                     <div className='border-r-2 border-white opacity-30'></div>

                    <div>
                        <h1 className='font-semibold md:font-extrabold text-3xl md:text-5xl lg:text-6xl md:mb-5 mb-2'>200+</h1>
                        <p className='text-lg md:text-xl lg:text-3'>Premium Tools</p>
                    </div>

                    <div className='border-r-2 border-white opacity-30'></div>

                    <div>
                        <h2 className='font-extrabold text-3xl md:text-5xl lg:text-6xl md:mb-5 mb-2'>4.9</h2>
                        <h2 className='text-lg md:text-xl lg:text-3'>Rating</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;