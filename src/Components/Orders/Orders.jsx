import React, { useEffect, useState } from 'react';
import { json } from 'react-router-dom';
import SingleFood from '../../foodcomponents/SingleFood';
import OrderBanner from '../../foodcomponents/OrderBanner';

const Orders = () => {

    const [orders, setOrders] =useState([])
    const [filterOrders, setFilterOrders] =useState([])

    useEffect(() => {
        // content
        const storedData = JSON.parse(localStorage.getItem("orders"))
        if(storedData)
            {
                setOrders(storedData)
                setFilterOrders(storedData)
            }
    }, []);

    const handleFilter = (event) => {
        const value = event.target.value;
        const filterData = orders.filter((item) => item.food_type == value );
        setFilterOrders(filterData)
      }

    return (
        <div>
           <OrderBanner/>

            <div className='my-8'>
                <label htmlFor="" className='font-bold text-xl'>Filter Order: </label>
                <select onChange={handleFilter} className="select select-bordered bg-orange-200 w-full max-w-xs">
                    <option disabled selected >Choose Here</option>
                    <option value="veg">Veg order</option>
                    <option value="non-veg">Non-veg oder</option>
                </select>
            </div>

            {
                filterOrders.length > 0 ?(
                filterOrders?.map((food) => <div className='my-4'>
                <SingleFood food ={food}/>
                </div>))
                :
                (<h1 className="text-xl text-center text-red-500">
                No Order Found</h1>)
            }
           
       </div>
    );
};

export default Orders;