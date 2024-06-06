import React, { useState } from 'react';
import Banner from '../../foodcomponents/Banner';
import { useLinkClickHandler, useLoaderData } from 'react-router-dom';
import SingleFood from '../../foodcomponents/SingleFood';

const Home = () => {

const data = useLoaderData()
console.log(data)

const [foods, setFoods] =useState(data)
const[ShowAll,setShowALL]=useState(false)

    return (
        <div>
            <Banner/>
            <div className='my-8'>
                <h1 className="text-3xl text-center py-5 font-bold">Our Featured Foods</h1>
            </div>

            {/* food section starts here*/}

            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
                 {
                    ShowAll?
                    foods.map((food) => <SingleFood food ={food}/>)
                    :
                    foods.slice(0,4).map((food) => <SingleFood food ={food}/>)
                 }
            </div>

            <div className='text-center mb-10'>
                   {
                    !ShowAll &&<button onClick={() => setShowALL(true)} className='btn btn-sm btn-secondary my-4'>
                       Show All
                   </button>
                   }
            </div>
        </div>
    );
};

export default Home;