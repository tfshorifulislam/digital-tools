import React from 'react';
import { BsCartXFill } from "react-icons/bs";
import OnlyCartsItam from './OnlyCartsItam/OnlyCartsItam';

const CartSection = ({ selectedCards, setMainSectionBtnToggle, setSelectedCards }) => {
    return (
        <div className='w-11/12 mx-auto'>
            <span className='text-2xl text-[#101727] font-bold'>Your Cart</span>
            {selectedCards.length === 0 && <div className='flex justify-center items-center'>
                <div className='flex justify-center items-center flex-col my-20'>
                    <BsCartXFill className='text-7xl' />

                    <p className='text-lg font-medium mt-2 mb-4'>No Items Found</p>
                    <button
                        onClick={()=>setMainSectionBtnToggle('Products')}
                        className='btn animate-pulse bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-full'>Go Back Products
                    </button>
                </div>
            </div>}

            {/* all carts */}
            {
                selectedCards.map((cartsItem, i) => <OnlyCartsItam key={i} cartsItem={cartsItem} selectedCards={selectedCards} setSelectedCards= {setSelectedCards}/>)
            }
        </div>
    );
};

export default CartSection;