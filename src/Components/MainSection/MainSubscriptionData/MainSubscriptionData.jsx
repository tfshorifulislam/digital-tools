import React, { use } from 'react';
import { FaCheck } from "react-icons/fa6";

const MainSubscriptionData = ({ subscriptionData, selectedCards, setSelectedCards}) => {
    const allCards = use(subscriptionData)

    const handleCardBuyBtn = (card)=>{
        setSelectedCards([...selectedCards,card])
    }
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-11/12 mx-auto gap-5'>
                {
                    allCards.map(card => <div key={card.id}>

                        <div className="bg-white border border-[#F2F2F2] shadow-lg p-6 rounded-2xl">

                            {/* card badge */}
                            <div className='relative'>
                                <div className='bg-[#E1E7FF] rounded-full w-fit absolute right-2'>
                                    <div className={` font-medium py-2 px-5 rounded-full 
                                            ${card.tagType === 'popular' ?
                                            'bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent '
                                            : card.tagType === 'new'
                                                ? 'text-[#0A883E] bg-[#DBFCE7] '
                                                : card.tagType === 'best-seller'
                                                    ? 'text-[#BB4D00] bg-[#FEF3C6]'
                                                    : ''}`}>

                                        {card.tag}
                                    </div>
                                </div>
                            </div>
                            {/* card img */}
                            <div
                                className='bg-white rounded-full border border-[#F2F2F2] w-14 h-14 p-3 flex justify-center items-center mb-4'>
                                <span className='text-2xl'>{card.icon}</span>
                            </div>

                            {/* card details  */}
                            <div>
                                <h1
                                    className='text-[#101727] font-bold text-xl md:text-2xl mb-4'>
                                    {card.name}
                                </h1>
                                <p
                                    className='text-[#627382] leading-5 mb-4'>
                                    {card.description}
                                </p>
                                <div className='flex items-center'>
                                    <span className='font-bold text-xl md:text-2xl'>${card.price}</span>
                                    <span className='text-[#627382]'>/{card.period}</span>
                                </div>
                                <div>
                                    <ul >
                                        {
                                            card.features.map((feature, i) =>
                                                <li key={i} className='flex items-center gap-3 text-[#627382] leading-5 my-4 font-me'>
                                                    <FaCheck className='text-[#30B868]' /> {feature}
                                                </li>)
                                        }
                                    </ul>
                                </div>
                                <button
                                    onClick={()=>handleCardBuyBtn(card)}
                                    className='btn py-4 w-full rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] font-bold text-white'>Buy Now
                                </button>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default MainSubscriptionData;