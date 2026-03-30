import React from 'react';

const MainSection = () => {
    return (
        <div>
            <div>
                <div className='space-y-4'>
                    <h1 className='font-bold md:font-extrabold text-[#101727] text-center text-2xl md:text-5xl'>Premium Digital Tools</h1>
                    <p className='text-center text-[#627382] leading-5'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                    <div className='flex justify-center mb-10'>
                        <div className='flex justify-center items-center w-fit bg-white border border-[#F6F6F6] p-2 rounded-full '>
                            <button
                                className='btn rounded-2xl md:rounded-full py-3 px-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>
                                Products
                            </button>

                            <button
                                className='btn rounded-2xl md:rounded-full py-3 px-6  text-[#25065D]'>
                                Cart (2)
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainSection;