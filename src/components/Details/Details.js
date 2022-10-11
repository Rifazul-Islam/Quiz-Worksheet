import React from 'react';
import Option from '../Option/Option';
import './Details.css'

const Details = ({ detail }) => {
    console.log(detail)
    const { question, options } = detail
    return (
        <div className='detail'>
            <h1 className='text-gray-700 text-2xl py-5'>  {question} </h1>

            <div>
                {
                    options.map(option => <Option key={option.id} option={option} ></Option>)


                }
            </div>
        </div>
    );
};

export default Details;