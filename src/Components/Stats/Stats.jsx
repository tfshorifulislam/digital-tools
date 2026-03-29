import React from 'react';

const Stats = () => {
    return (
        <div>
            <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
                <div className='flex justify-between  gap-3 py-7 lg:py-14 px-5 lg:px-48 text-white text-center'>
                    <div className=''>
                        <h2 className='font-semibold md:font-extrabold text-2xl lg:text-4xl mb-5'>50K+</h2>
                        <p className='font-medium text-xl'>Active Users</p>
                    </div>
                    
                     <div className='border-r-2 border-white opacity-30'></div>

                    <div>
                        <h1 className='font-semibold md:font-extrabold text-2xl lg:text-4xl mb-5'>200+</h1>
                        <p className='font-medium text-xl'>Premium Tools</p>
                    </div>

                    <div className='border-r-2 border-white opacity-30'></div>

                    <div>
                        <h2 className='font-extrabold text-2xl lg:text-4xl mb-5'>4.9</h2>
                        <h2 className='font-medium text-xl'>Rating</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Stats;