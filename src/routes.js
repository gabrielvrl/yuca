import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './components/Header.js';
import Menu from './components/Menu';
import Home from './components/Home';
import HireServices from './components/HireServices'
import MyAccount from './components/MyAccount'
import Success from './components/Success'
import ChangeAccountInformation from './components/ChangeAccountInformation'
import PageNotFound from './components/PageNotFound'


export default function Routes() {
    return (
        <BrowserRouter>
            <Header />
            <Menu />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/hireservices" exact component={HireServices} />
                <Route path="/myaccount" exact component={MyAccount} />
                <Route path="/success" exact component={Success} />
                <Route path="/changeaccountinformation" exact component={ChangeAccountInformation} />
                <Route component={PageNotFound} />
            </Switch>
        </BrowserRouter>
    );
}