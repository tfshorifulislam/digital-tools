import React from 'react';
import heroImg from '../../assets/products/banner.png'
import play from '../../assets/products/Play.png'
import pointImg from '../../assets/products/Group 5.png';
const Banner = () => {
    return (
        <div>
            <div className='flex justify-between items-center flex-col-reverse md:flex-row py-8 md:py-24'>

                {/* hero container text */}
                <div className='space-y-4'>

                    <div className='flex justify-center md:justify-start mt-8 md:mt-0'>
                        <div className='flex items-center justify-center gap-1 md:gap-3 py-2 px-4 bg-[#E1E7FF] rounded-full w-80'>
                            <img src={pointImg} alt="" />
                            <p className='font-medium text-center bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</p>

                        </div>
                    </div>

                    <div>
                        <h1 className='font-bold text-center md:text-start md:font-extrabold text-3xl md:text-4xl lg:text-7xl text-[#101727] leading-10 lg:leading-21'>
                            Supercharge Your <br /> Digital Workflow
                        </h1>
                    </div>

                    <div>
                        <p className='text-[#627382] md:leading-8 md:text-lg text-center md:text-start'>
                            Access premium AI tools, design assets, templates, and productivity <br />
                            software—all in one place. Start creating faster today. <br />
                            Explore Products
                        </p>
                    </div>

                    <div className='flex flex-col md:flex-row gap-5 md:gap-8'>
                        <button
                            className='btn rounded-2xl md:rounded-full p-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white'>
                            Explore Products
                        </button>
                        <button
                            className='btn md:rounded-full rounded-2xl bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent'>

                            <img src={play} alt="" />
                            Watch Demo
                        </button>
                    </div>

                </div>

                {/* hero container image */}
                <div>
                    <img src={heroImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;