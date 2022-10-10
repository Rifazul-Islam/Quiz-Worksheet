import React from 'react';
import { Link } from 'react-router-dom';
import './Navber.css';

const Navber = () => {
    return (


        <nav>


            <div className="navbar first-letter:  bg-indigo-500">
                <div className="flex-1 ml-20">

                    <h3 className='text-2xl text-white'> Quiz & Worksheet</h3>
                </div>
                <div className="flex-none text-white mr-20 navber">
                    <Link to='/home'> Home</Link>
                    <Link to='/rechart'>Rechart</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navber;