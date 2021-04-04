import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './component/Home/Home'
import NavBar from './component/NavBar/NavBar';
import SignUp from './component/SignUp/SignUp';
import Login from './component/Login/Login';
import AuthCTDetail from './component/AuthUser/AuthCTDetail'

const MainRouter = (props) => {
    return (
        <Router user={props.user}>
            <NavBar user={props.user} handleUserLogout={props.handleUserLogout}/>
                <Switch >
                    <Route exact path="/recipe-detail/:id" component={AuthCTDetail} />
                    <Route exact path="/login" render={(routerProps) => <Login {...routerProps} handleUserLogin={props.handleUserLogin} />} />
                    <Route exact path="/sign-up" component={SignUp} />
                    <Route exact path="/home" component={Home} />
                </Switch>
        </Router>
    )
}

export default MainRouter
