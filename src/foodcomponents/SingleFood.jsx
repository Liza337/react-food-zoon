import React from 'react';
import { Link } from 'react-router-dom';

const SingleFood = ({food}) => {

    const {id,name,image,food_type,description} =food
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure className="w-1/2 h-[320px]"><img className='h-full w-full' src={image} alt="Image"/></figure>
            <div className="card-body">
                <h2 className="card-title">{name}
                <div className="badge badge-secondary">{food_type}</div>
                </h2>
                <p>{description.slice(0,60)}...</p>
                <div className="card-actions justify-end">
                  <Link to={`/food/${id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default SingleFood;