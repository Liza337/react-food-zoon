import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../../foodcomponents/Banner';
import BannerPage from '../../foodcomponents/BannerPage';

const FoodsDetails = () => {

    const data = useLoaderData();
    // console.log(data)
    const {id,name,image,price,rating,food_type,description} =data

    const [ordered,setOrdered] = useState(false)

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("orders"));
    if(storedData){
        const exist = storedData.find(item => item.id == id);
        if(exist){
            setOrdered(true)
        }

    }
  },[data])

    const handleOrder = () =>{
           
        const storedData = JSON.parse(localStorage.getItem("orders"))
        if(storedData)
            {
              localStorage.setItem("orders", JSON.stringify([...storedData,data]))
            }
        else{
            localStorage.setItem("orders", JSON.stringify([data]))
        }
        setOrdered(true)
    }

    return (
        <div>
           <BannerPage/>
            <div className="card card-side bg-base-100 shadow-xl my-3">
                <figure className="w-1/2 h-[320px]"><img className='h-full w-full' src={image} alt="Image"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}
                    <div className="badge badge-secondary">{food_type}</div>
                    </h2>
                    <p>{description}</p>
                    <p className='font-bold'>Price: ${price}</p>
                    <p className='font-bold'>Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <button disabled={ordered} onClick={handleOrder} className="btn btn-primary">
                        {
                            ordered ?
                            "Already Ordered"
                            :
                            "Order Now"
                            }
            
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodsDetails;