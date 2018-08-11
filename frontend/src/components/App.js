import React, {component} from 'react';
import ReactDOM from "react-dom";
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import { Provider } from "react-redux";
import Nokeep from "./Nokeep";
import store from "../store/index";

const App = () => (

    <Provider store={store}>

    <div>
    <Nokeep />
    </div>

    </Provider>

);

const wrapper = document.getElementById("app");

wrapper ? ReactDOM.render(<App />,wrapper) : null;


