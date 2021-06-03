import React from "react";
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Repositories from '../pages/Repositories';

export default function Router() {
    return <>
        <BrowserRouter basename="/">
            <Route exact path="/">
                <Redirect to="/hiperesp"/>
            </Route>
            <Route exact path="/:username">
                <Repositories/>
            </Route>
        </BrowserRouter>
    </>
}