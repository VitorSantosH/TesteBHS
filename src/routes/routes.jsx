import React from "react";
import {  Route, Redirect, Switch} from 'react-router-dom';
import Sobre from "../templates/sobre/Sobre";


import Conteudo from '../templates/conteudo/Conteudo'

const Routes = props =>
    <Switch>

        <Route exact path='/' component={Conteudo} />
        <Route exact path='/sobre' component={Sobre} />
        <Redirect from="*" to="/" />

    </Switch>



export default Routes;