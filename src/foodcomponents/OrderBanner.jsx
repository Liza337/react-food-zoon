import React from 'react';
import orderImg from '../assets/sandwich-2977251_1280 (2).jpg'

const OrderBanner = () => {
    return (
        <div className="hero h-3/4 bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={orderImg} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your Orders Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default OrderBanner;