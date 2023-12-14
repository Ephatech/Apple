import React from 'react';
import Header from '../header/Header';
import Ad from '../sections/Ad';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';

const Shared = () => {
    return (
        <>
            <Header/>
            <Ad/>
            <Outlet/>
            <Footer/>
        </>
    );
}

export default Shared;
