import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = ({ item }) => {




    const { name, logo, total, id } = item


    return (
        <div>
            <div className=" card card-compact  bg-indigo-600 shadow-xl">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">


                    <div className="card-actions justify-end">
                        <h2 className="card-title text-white">{name}</h2>
                        <p className='text-white text-2xl'> Quiz:{total} </p>
                        <Link to={`/quiz/${id}`}> <button className="btn btn-primary">Buy Now</button> </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Quiz;