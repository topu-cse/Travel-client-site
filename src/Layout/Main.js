import React from 'react';
import Navber from '../Pages/Sharred/Navbar/Navber';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Sharred/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;