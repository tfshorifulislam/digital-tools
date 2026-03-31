import React, { use } from 'react';
import OnlyPricingCard from './OnlyPricingCard/OnlyPricingCard';

const PricingSection = ({ pricingData }) => {
    const priceCard = use(pricingData)
    return (
        <div>
            <div className='w-11/12 mx-auto'>
                <h2 className='text-3xl md:text-5xl font-bold md:font-extrabold text-center text-[#101727] mb-4'>Simple, Transparent Pricing</h2>
                <p className='text-[#627382] text-center leading-5 mb-10'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-11/12 lg:w-10/12 mx-auto  gap-6 relative'>
                

                {
                    priceCard.map(pricingCard => <OnlyPricingCard key={pricingCard.plan} pricingCard={pricingCard} />)
                }
            </div>
        </div>
    );
};

export default PricingSection;