import React from 'react';

const CartSection = ({ selectedCards }) => {
    return (
        <div className='w-11/12 mx-auto'>
            <span className='text-2xl text-[#101727] font-bold'>Your Cart</span>
            {
                selectedCards.map((cartsItem, i) => <div key={i}>
                    <div>
                        <div className='my-4'>
                            <div className='bg-white py-5.5 px-5 rounded-2xl flex'>
                                <span
                                    className='mr-4 w-14 h-14 rounded-full bg-white border border-[#F2F2F2] p-3'>{cartsItem.icon}
                                </span>
                                <div className='flex justify-between w-full'>
                                    <div>
                                        <h4 className='text-xl font-semibold text-[#101727] mb-2'>{cartsItem.name}</h4>
                                        <span>${cartsItem.price}</span>
                                    </div>

                                    <button
                                        className='btn border-none bg-none text-[#FF3980] text-bold'>Remove
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default CartSection;