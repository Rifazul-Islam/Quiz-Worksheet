import React from 'react';
import { Link } from 'react-router-dom';
import './Navber.css';

const Navber = () => {
    return (
        <div className="navbar bg-blue-500">
            <div className="flex-1">
                <h1 className="text-white ml-2 text-xl">Quiz & Worksheet</h1>
            </div>
            <div className="flex-none">
                <div className="flex-none  text-white mr-20 navber">
                    <Link to='/home'> Home</Link>
                    <Link to='/rechart'>Rechart</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
            </div>
        </div>



    );
};

export default Navber;