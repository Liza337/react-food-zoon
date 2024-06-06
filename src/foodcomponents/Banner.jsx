import React from 'react';
import bannerImg from '../assets/banner.jpg'
const Banner = () => {
    return (
    <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
                <h1 className="text-5xl font-bold">Grab your food here</h1>
                <h1 className="text-xl py-3">Your One-Stop Destination for Delicious Meals</h1>
                <p className="py-6">Discover an array of mouth-watering dishes crafted with the freshest ingredients. Whether you're craving a hearty meal, a quick snack, or a sweet treat, we've got something to satisfy every palate. </p>
                <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    </div>
    );
};

export default Banner;