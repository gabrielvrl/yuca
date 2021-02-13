import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header.js';
import Menu from './components/Menu';
import Home from './components/Home';
import HireServices from './components/HireServices'


export default function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Menu />
            <Route path="/" exact component={Home} />
            <Route path="/hireservices" component={HireServices} />
        </BrowserRouter>
    );
}