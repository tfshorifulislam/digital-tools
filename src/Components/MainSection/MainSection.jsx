import React from 'react';
import MainSubscriptionData from './MainSubscriptionData/MainSubscriptionData';

const MainSection = ({  subscriptionData, selectedCards, setSelectedCards }) => {


    return (
        <div>
            <div>
                {/* main section default card is here */}
                <MainSubscriptionData subscriptionData = {subscriptionData} selectedCards ={selectedCards} setSelectedCards ={setSelectedCards} />
            </div>
        </div>
    );
};

export default MainSection;