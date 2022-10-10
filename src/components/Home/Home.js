import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';
import './Home.css'

const Home = () => {
    const items = useLoaderData()


    return (
        <div className='home-container'>

            {
                items.data.map(item => <Quiz key={item.id} item={item} ></Quiz>)
            }

        </div>
    );
};

export default Home;