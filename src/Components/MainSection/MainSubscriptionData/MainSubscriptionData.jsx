import React, { use, useState } from 'react';
import OnlyCardMap from './OnlyCardMap/OnlyCardMap';

const MainSubscriptionData = ({ subscriptionData, selectedCards, setSelectedCards }) => {
    const allCards = use(subscriptionData)

    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 w-11/12 mx-auto gap-5'>
                {
                    allCards.map(card => <OnlyCardMap card={card} selectedCards={selectedCards} setSelectedCards={setSelectedCards} />)
                }
            </div>
        </div>
    );
};

export default MainSubscriptionData;