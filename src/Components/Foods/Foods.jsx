import React from 'react';
import Statistics from '../../foodcomponents/Statistics';

const Foods = () => {
    return (
        <div>
            <div className="relative bg-base-100 py-12 mb-8">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10">
                    <h1 className="text-5xl text-center font-bold text-white">Food Statistics Overview</h1>
                    <p className="text-lg p-4 text-white">
                        Welcome to the Food Statistics page! Here, you will find detailed insights into the popularity and demand for various dishes in our menu. Our data visualizations provide a comprehensive look at the number of orders for each item, helping you understand customer preferences and trends.
                    </p>
                </div>
            </div>
            <Statistics/>
        </div>

    );
};

export default Foods;