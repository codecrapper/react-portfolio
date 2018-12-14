import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScrollToTopRoute from './ScrollToTopRoute';

import App from '../App';
import WorkPage1 from './WorkPage1';
import WorkPage2 from './WorkPage2';
import WorkPage3 from './WorkPage3';
import WorkPage4 from './WorkPage4';
import Error from './Error';

const RouterPortfolio = () => {
    return (
        <BrowserRouter>
            <Switch>
                <ScrollToTopRoute path="/" component = { App } exact/>
                <ScrollToTopRoute path="/work1" component = { WorkPage1 } />
                <ScrollToTopRoute path="/work2" component = { WorkPage2 } />
                <ScrollToTopRoute path="/work3" component = { WorkPage3 } />
                <ScrollToTopRoute path="/work4" component = { WorkPage4 } />
                <Route component ={ Error }/>
            </Switch>
        </BrowserRouter>
    )
}

export default RouterPortfolio;