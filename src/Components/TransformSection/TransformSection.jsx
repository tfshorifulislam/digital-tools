import React from 'react';

const TransformSection = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
            <div className='w-11/12 mx-auto flex justify-center items-center py-28 flex-col space-y-10'>
                <div className='space-y-4'>
                    <h2 className='font-bold md:font-extrabold text-white text-2xl text-center md:text-4xl'>Ready to Transform Your Workflow?</h2>
                    <p className='leading-6 text-white opacity-80 text-center'>Join thousands of professionals who are already using Digitools to work smarter. <br /> Start your free trial today.</p>
                </div>
                <div className='flex flex-col items-center justify-center space-y-4'>
                    <div className='flex gap-5'>
                        <span className='bg-white btn rounded-full shadow-none border-none py-4 px-5'>
                            <button className=' bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>
                                Explore Products
                            </button>
                        </span>
                        <button className='btn rounded-full shadow-none border-white text-white hover:text-black py-4 px-5 btn-outline'>
                            View Pricing
                        </button>
                    </div>
                    <p className='leading-5 text-white opacity-80 text-center'>14-day free trial • No credit card required • Cancel anytime</p>
                </div>
            </div>
        </div>
    );
};

export default TransformSection;