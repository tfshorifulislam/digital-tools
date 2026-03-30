import React from 'react';
import { BsCartXFill } from "react-icons/bs";
import OnlyCartsItam from './OnlyCartsItam/OnlyCartsItam';

const CartSection = ({ selectedCards, setMainSectionBtnToggle, setSelectedCards }) => {

    const totalPrice = selectedCards.reduce((total , i) => (total + i.price), 0)
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

            {/* total count price */}
            <div className={`${selectedCards.length === 0 ? 'hidden': 'flex flex-col'}`}>
                <div className='flex justify-between items-center'>
                    <p className='text-[#627382]'>total:</p>
                    <h3 className='font-bold text-2xl text-[#101727]'>${totalPrice}</h3>
                </div>
                <button className='w-full btn rounded-full my-6 text-white font-bold py-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default CartSection;