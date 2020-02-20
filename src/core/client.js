import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "mobx-react";
import { createInitalRootStore } from "../store";
import { routes } from "../routes";

const rootStore = createInitalRootStore();

const App = () => {
    return (
        <Provider rootStore={rootStore}>
            <BrowserRouter>
                <Switch>
                    {routes.map(route => {
                        return (<Route {...route} />)
                    })}
                </Switch>
            </BrowserRouter>
        </Provider>
    )
}

ReactDom.hydrate(<App />, document.getElementById("root"));