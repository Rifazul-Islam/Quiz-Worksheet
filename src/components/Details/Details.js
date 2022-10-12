import React from 'react';
import Option from '../Option/Option';
import './Details.css';
import { EyeIcon } from '@heroicons/react/24/solid';
import { toast } from 'react-toastify';
const Details = ({ detail }) => {
    // console.log(detail)
    const { question, options, correctAnswer } = detail



    const answerAdd = (detail) => {

        toast.success(detail, { autoClose: 500 })

    }


    return (
        <div className='detail bg-blue-400'>
            <span className=' flex justify-end'> <div onClick={() => answerAdd(correctAnswer)}>< EyeIcon className="h-6 w-6 text-white" /> </div> </span>
            <h1 className='text-gray-700 text-2xl py-5'>   {question.slice(3, -4)} </h1>


            <div className='grid grid-cols-0 gap-3'>
                {
                    options.map((option, idx) => <Option key={idx} option={option} detail={detail}></Option>)

                }
            </div>
        </div>
    );
};

export default Details;