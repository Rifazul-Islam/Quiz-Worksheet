import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/solid'

const Quiz = ({ item }) => {

    // console.log(item)

    const { name, logo, total, id } = item


    return (
        <div >
            <div className=" mt-10 card card-compact  bg-indigo-600 shadow-xl">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">


                    <div className="card-actions justify-end">
                        <h2 className="card-title text-white">{name}</h2>
                        <p className='text-white text-2xl'> Quiz:{total} </p>
                        <Link to={`/quiz/${id}`}> <button className="btn btn-primary">Details <ChevronRightIcon className="h-6 w-6 text-white" /></button> </Link>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Quiz;