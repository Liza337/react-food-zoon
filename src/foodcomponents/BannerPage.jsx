import React from 'react';

const BannerPage = () => {
    return (
        <div className="hero min-h-screen bg-green-400"style={{backgroundImage: 'url(https://i.pinimg.com/originals/33/ef/8b/33ef8b9c0b902154a6cd4103a21275ef.jpg)'}}>
            <div className="hero-overlay bg-opacity-20"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md text-black">
                    <h1 className="mb-5 text-5xl font-bold">Food Details</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default BannerPage;