import React from 'react';
import Option from '../Option/Option';
import './Details.css';
import { BellIcon } from '@heroicons/react/24/solid'


const Details = ({ detail }) => {
    console.log(detail)
    const { question, options, } = detail





    return (
        <div className='detail bg-blue-400'>
            <span className=' flex justify-end'> <BellIcon className="h-6 w-6 text-white" /></span>
            <h1 className='text-gray-700 text-2xl py-5'>   {question.slice(3, -4)} </h1>


            <div className='grid grid-cols-0 gap-3'>
                {
                    options.map(option => <Option key={option.id} option={option} detail={detail}></Option>)

                }
            </div>
        </div>
    );
};

export default Details;