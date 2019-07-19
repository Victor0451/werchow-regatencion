import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//REDUX
import { Provider } from "react-redux";
import store from "../store";

import Navbar from './layout/navbar';
import RegistroAtencion from './atencion/registroAtencion';
import HomePage from './homePage';
import { USER_LOGEDED } from '../actions/types';
import ListadoAtenciones from './atencion/ListadoAtenciones';

const token = sessionStorage.getItem('token')

if (token) {
    store.dispatch({ type: USER_LOGEDED })
}


export default class Router extends Component {

    render() {

        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                    <Route exact path="/" component={HomePage} />

                    {token ?
                        <Switch>

                            <Route exact path="/atencion/nueva" component={RegistroAtencion} />
                            <Route exact path="/atencion/listado" component={ListadoAtenciones} />


                        </Switch>
                        :
                        <Switch>

                            <Route exact path="/atencion/nueva" component={RegistroAtencion} />
                            

                        </Switch>
                    }

                </BrowserRouter>
            </Provider>
        )
    }
}
