import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const data = [
        {
            name: 'Vegetable Stir-Fry',
            NoOfOrders: 11,
        },
        {
            name: 'Chicken Alfredo',
            NoOfOrders: 9,
        },
        {
            name: 'Veggie Burger',
            NoOfOrders: 6,
        },
        {
            name: 'Beef Stroganoff',
            NoOfOrders: 7,
        
        },
        {
            name: 'Vegetable Curry',
            NoOfOrders: 8,
    
        },
        {
            name: 'Veggie Pizza',
            NoOfOrders: 6,
            
        },
        {
            name: 'Fish Tacos',
            NoOfOrders: 5,
           
        },
    ];
    return (
        <div style={{ width: '100%', height: 400 }} className="mb-36">
            <ResponsiveContainer>
                <AreaChart
                    width={500}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="NoOfOrders" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;