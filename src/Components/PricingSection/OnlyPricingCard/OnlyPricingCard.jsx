import React, { } from 'react';
import { FaCheck } from "react-icons/fa6";

const OnlyPricingCard = ({ pricingCard }) => {

    return (
        <div >
            <div className={`${pricingCard.popular && 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-2xl'}`}>
                <div
                    className={`rounded-2xl  border border-[#F1F1F1] shadow-xl p-6 mb-32 
                    `}>
                    <div>
                        <div className='relative flex'>
                            <h2
                                className={`text-[#101727] text-2xl font-bold mb-2 ${pricingCard.popular && 'text-white'} `}>{pricingCard.plan}
                            </h2>
                            <div
                                className={`rounded-full bg-[#FEF3C6] py-2 px-3 text-[#BB4D00]
                                ${pricingCard.popular ? 'absolute right-20 lg:right-15 xl:right-25  2xl:right-40 -top-10' : 'hidden'}`}>Most Popular
                            </div>
                        </div>
                        <p className={`text-[#627382] leading-5 mb-6 ${pricingCard.popular && 'text-white'}`}>{pricingCard.description}</p>
                        <div className='flex items-baseline mb-6'>
                            <p className={`font-bold text-4xl text-[#101727] ${pricingCard.popular && 'text-white'}`}>${pricingCard.price}</p>
                            <p className={`${pricingCard.popular && 'text-white'} text-[#627382]`}>{pricingCard.period}</p>
                        </div>

                        {
                            pricingCard.features.map(i =>
                                <span key={i}
                                    className={`font-medium text-[#627382] flex items-center gap-2 mb-2 ${pricingCard.popular && 'text-white'}`}>
                                    <FaCheck className='text-[#30B868]' />{i}
                                </span>)
                        }
                        <div className='mt-6 flex flex-col justify-between'>
                            <button
                                className={`btn  w-full rounded-full border-none shadow-none ${pricingCard.popular ? 'bg-white bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent ' : 'text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]'}`}>

                                <span className={`${pricingCard.popular && 'bg-white text-black btn  w-full rounded-full border-none shadow-none'}`}>

                                    {pricingCard.buttonText}
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OnlyPricingCard;