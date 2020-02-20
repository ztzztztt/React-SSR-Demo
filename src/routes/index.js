import React from "react";
import { Home, Login, NotFound } from "../views/"
import { Redirect } from "react-router-dom";

const routes = [
    {
        key: "/",
        path: "/",
        component: Home,
        exact: true,
        loadData: Home.loadData
    }, {
        key: "/login",
        path: "/login",
        component: Login,
        exact: false
    }, , {
        key: "/404",
        path: "/404",
        component: NotFound,
        exact: false
    }
]

const NotFound404 = <Redirect to="/404"/>
 
export { routes, NotFound404} ;