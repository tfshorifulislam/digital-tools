import React from 'react';
import MainSubscriptionData from './MainSubscriptionData/MainSubscriptionData';

const MainSection = ({  subscriptionData }) => {


    return (
        <div>
            <div>
                {/* main section default card is here */}
                <MainSubscriptionData subscriptionData = {subscriptionData} />
            </div>
        </div>
    );
};

export default MainSection;