import React, { useState, useContext } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { RedirectContext } from '../context/RedirectContext';
import Home from './program/Home';

import DocumentTitle from 'react-document-title';

const r = () => {
    const redirectContext = useContext(RedirectContext);
    const [home, setHome] = useState(false);
    const [title, setTitle] = useState('React');

    function PrivateRoute({ ...program }) {
        return (
            <Route
                exact={program.exact}
                path={program.path}
                render={() => {
                    return home ? program.component : <Redirect to="/" />;
                }}
            />
        );
    }

    return (
        <RedirectContext.Provider
            value={{ enterHome: home, setNewHome: setHome, setNewTitle: setTitle }}
        >
            <DocumentTitle title={title}>
                <Switch>
                    <Route exact path="/index" component={Home}></Route>
                    <Redirect exact from="/" to="/index"></Redirect>

                    {redirectContext.programs.map((program, i) => (
                        <PrivateRoute key={i} {...program}></PrivateRoute>
                    ))}
                </Switch>
            </DocumentTitle>
        </RedirectContext.Provider>
    );
};

export default r;
