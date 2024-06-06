import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-primary-content ">
            <div className="flex-1">
                <a className="text-orange-500 text-3xl font-bold font-serif">Khabar Bari</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li>
                     <Link to={'/'} className="font-bold">Home</Link>
                     </li>
                    <li>
                    <Link to={'/orders'} className="font-bold">Orders</Link>
                    </li>
                    <li>
                    <Link to={'/foods'} className="font-bold">Statistics</Link>
                    </li>
                    <li>
                    <Link to={'/about'} className="font-bold">About</Link>
                    </li>
                    
                </ul>
            </div>
        </div>
    );
};

export default Navbar;