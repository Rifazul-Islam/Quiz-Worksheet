import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Header from '../Header/Header';
import Quiz from '../Quiz/Quiz';
import './Home.css'

const Home = () => {
    const items = useLoaderData()


    return (
        <div >
            <Header></Header>
            <div className='home-container'>
                {
                    items.data.map(item => <Quiz key={item.id} item={item}  ></Quiz>)
                }

            </div>

        </div>
    );
};

export default Home;