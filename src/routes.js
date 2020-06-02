import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import repositories from './repositories';

export default function Routes() {
    return (
    <BrowserRouter>
        <Switch>
            <Route path = '/repositories' component={repositories} />
        </Switch>
    </BrowserRouter>
    )
}