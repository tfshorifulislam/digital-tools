import React from 'react';

const NavItems = ({navMenu}) => {
    return (
        <div className='hidden md:flex items-center gap-3 lg:gap-6 text-[#101727] font-semibold'>
            {
                navMenu.map(menuItem => <div key={menuItem} >
                    <a href={menuItem}>{menuItem}</a>
                </div>)
            }
        </div>
    );
};

export default NavItems;