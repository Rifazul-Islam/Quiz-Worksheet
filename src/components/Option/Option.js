import React from 'react';
import './Option.css'

const Option = ({ option }) => {


    return (
        <div>

            <ul>
                <li className='option text-2xl '>
                    <span className=' text-1xl'> <input type='checkbox' /></span> {option}

                </li>

            </ul>


        </div>
    );
};

export default Option;