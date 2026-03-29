import React, { useState } from 'react';
import logo from '../../assets/products/logo.png'
import NavItems from './NavItems/NavItems';
import { CiShoppingCart } from 'react-icons/ci';
import { IoMdMenu } from "react-icons/io";

const NavBar = () => {
    const navMenu = ['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ']
    const [hamburgerMenu, setHamburgerMenu] = useState(false)
    console.log(hamburgerMenu)
    return (
        <div className='mt-8 flex justify-between items-center'>

            {/* Nav logo */}
            <div className='w-25 lg:w-45'>
                <img src={logo} alt="" />
            </div>

            {/* Navbar menu items */}
            <div>
                <NavItems navMenu={navMenu} />
            </div>

            {/* Navbar cart icon, login, started btn and responsive menu icon */}
            <div className='flex justify-between items-center gap-3 lg:gap-5 '>

                <CiShoppingCart className='text-2xl cursor-pointer' />

                <IoMdMenu className='flex md:hidden text-2xl cursor-pointer' onClick={() => setHamburgerMenu(!hamburgerMenu)} />

                <div
                    className={`    
                    ${hamburgerMenu ?
                            'flex flex-col space-y-5 py-10 px-5 rounded-xl absolute top-15 right-5 bg-gray-200 shadow-xl'
                            : 'hidden md:flex md:flex-row md:bg-transparent md:p-0'}`}>

                    <span
                        className={`text-[#101727] font-medium md:font-semibold ${hamburgerMenu ?
                            'flex'
                            : 'hidden md:flex btn btn-xs sm:btn-sm md:btn-md'}`}>Login
                    </span>

                    <span
                        className={`font-medium md:font-semibold ${hamburgerMenu ?
                            'flex text-[#101727]'
                            : 'hidden md:flex btn btn-xs sm:btn-sm md:btn-md bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full px-4 py-3 text-white'}`}>Get Started
                    </span>
                    
                </div>

            </div>
        </div>
    );
};

export default NavBar;