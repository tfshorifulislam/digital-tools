import React from 'react';
import img1 from '../../assets/products/1.png'
import icon1 from '../../assets/products/user.png'
import img2 from '../../assets/products/2.png'
import icon2 from '../../assets/products/package.png'
import img3 from '../../assets/products/3.png'
import icon3 from '../../assets/products/rocket.png'
const StepsSection = () => {
    return (
        <div>
            <div className='mt-60 mb-30 w-11/12 mx-auto'>
                <div>
                    <h1 className='text-3xl text-[#101727] text-center md:text-5xl font-medium md:font-extrabold'>Get Started in 3 Steps</h1>
                    <p className='text-center leading-5 text-[#627382] mt-4 mb-10'>Start using premium digital tools in minutes, not hours.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 lg:w-10/12 mx-auto'>
                    <div className='bg-white border border-[#F1F1F1] shadow-lg pt-5 px-6 pb-20 rounded-2xl w-fit'>
                        <div className='flex justify-end'>
                            <img src={img1} alt='img 1' />
                        </div>
                        <div className='space-y-4'>
                            <div className='flex justify-center'>
                                <div className='bg-linear-to-r from-[#4F39F620] to-[#9514FA20] rounded-full w-fit p-5 '>
                                    <img src={icon1} alt="" />
                                </div>
                            </div>
                            <h2 className='font-bold text-2xl text-center text-[#101727]'>Create Account</h2>
                            <p className='text-center text-[#627382] leading-5'>Sign up for free in seconds. No credit card required to get started.</p>
                        </div>

                    </div>

                    <div className='bg-white border border-[#F1F1F1] shadow-lg pt-5 px-6 pb-20 rounded-2xl w-fit'>
                        <div className='flex justify-end'>
                            <img src={img2} alt='img 2' />
                        </div>

                        <div className='space-y-4'>
                            <div className='flex justify-center'>
                                <div className='bg-linear-to-r from-[#4F39F620] to-[#9514FA20] rounded-full w-fit p-5 '>
                                    <img src={icon2} alt="" />
                                </div>
                            </div>
                            <h2 className='font-bold text-2xl text-center text-[#101727]'>Choose Products</h2>
                            <p className='text-center text-[#627382] leading-5'>Browse our catalog and select the tools that fit your needs.</p>
                        </div>

                    </div>

                    <div className='bg-white border border-[#F1F1F1] shadow-lg pt-5 px-6 pb-20 rounded-2xl w-fit'>
                        <div className='flex justify-end'>
                            <img src={img3} alt='img 3' />
                        </div>
                        <div className='space-y-4'>
                            <div className='flex justify-center'>
                                <div className='bg-linear-to-r from-[#4F39F620] to-[#9514FA20] rounded-full w-fit p-5 '>
                                    <img src={icon3} alt="" />
                                </div>
                            </div>
                            <h2 className='font-bold text-2xl text-center text-[#101727]'>Start Creating</h2>
                            <p className='text-center text-[#627382] leading-5'>Download and start using your premium  tools immediately.</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default StepsSection;