import React from 'react';
import footerLogo from '../../assets/products/DigiTools footer logo.png'
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='pt-20 md:pt-30 pb-8 bg-[#101727] text-white'>

            <div className='w-10/12 mx-auto flex flex-col md:flex-row justify-start md:justify-between space-y-10'>
                <div className='space-y-4 '>
                    <img src={footerLogo} alt="" />
                    <p className='text- white leading-6 opacity-80'>Premium digital tools for creators,<br /> professionals, and businesses. Work smarter <br /> with our suite of powerful tools.</p>
                </div>
                <div className='space-y-4'>
                    <h2 className='leading-7 text-xl font-medium'>Product</h2>
                    <div className='space-y-4 opacity-80'>
                        <p>Features</p>
                        <p>Pricing</p>
                        <p>Templates</p>
                        <p>Integrations</p>
                    </div>
                </div>
                <div className='space-y-4 '>
                    <h2 className='leading-7 text-xl font-medium'>Company</h2>
                    <div className='space-y-4 opacity-80'>
                        <p>About</p>
                        <p>Blog</p>
                        <p>Careers</p>
                        <p>Press</p>
                    </div>
                </div>
                <div className='space-y-4 '>
                    <h2 className='leading-7 text-xl font-medium'>Resources</h2>
                    <div className='space-y-4 opacity-80'>
                        <p>Documentation</p>
                        <p>Help Center</p>
                        <p>Community</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div className='space-y-4'>
                    <h2 className='leading-7 text-xl font-medium'>Social Links</h2>
                    <div className='flex gap-3'>
                        <AiFillInstagram className='p-3 bg-white rounded-full text-[#101727] text-5xl' />
                        <FaFacebook className='p-3 bg-white rounded-full text-[#101727] text-5xl' />
                        <FaSquareXTwitter className='p-3 bg-white rounded-full text-[#101727] text-5xl' />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;