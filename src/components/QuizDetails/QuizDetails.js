import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Details from '../Details/Details';


const QuizDetails = () => {
    const details = useLoaderData().data.questions


    // console.log(details)


    return (
        <div>

            {
                details.map(detail => <Details key={detail.id} detail={detail} > </Details>)
            }
        </div>
    );
};

export default QuizDetails;