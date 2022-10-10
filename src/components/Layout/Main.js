import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Navber from '../Navber/Navber';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;